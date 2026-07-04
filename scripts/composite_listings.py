"""Composite product cutouts onto the store-corner background photo.

Usage:
  python scripts/composite_listings.py samples   # 3 sample images
  python scripts/composite_listings.py all       # every product in exports/products-feed.json

Output: exports/listing-composites/<slug>.jpg (2000x2000, q90)
Background: the Ninja Turtle corner photo (watermark cropped out).
"""
import io, json, sys, urllib.request
from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance
from rembg import remove, new_session

ROOT = Path(__file__).resolve().parent.parent
BG_PATH = Path(r"C:\Users\kando\Downloads\Remove Red Shirt(2).png")
OUT = ROOT / "exports" / "listing-composites"
CANVAS = 2000
SESSION = new_session("u2net")


CANVAS_W, CANVAS_H = 1600, 2000  # 4:5 to match the product-card crop


def load_white() -> Image.Image:
    return Image.new("RGB", (CANVAS_W, CANVAS_H), (250, 250, 250))


def load_background() -> Image.Image:
    bg = Image.open(BG_PATH).convert("RGB")
    # crop 4% off each edge to remove the AI watermark
    w, h = bg.size
    m = int(w * 0.04)
    bg = bg.crop((m, m, w - m, h - m))
    # center-crop to 4:5
    w, h = bg.size
    cw = int(h * CANVAS_W / CANVAS_H)
    x0 = (w - cw) // 2
    bg = bg.crop((x0, 0, x0 + cw, h)).resize((CANVAS_W, CANVAS_H), Image.LANCZOS)
    # keep the background nearly sharp so composites match the real store photos;
    # a touch of blur + darkening still separates the garment
    bg = bg.filter(ImageFilter.GaussianBlur(1.5))
    bg = ImageEnhance.Brightness(bg).enhance(0.85)
    return bg


def cutout(img_bytes: bytes) -> Image.Image:
    import numpy as np
    from scipy import ndimage

    fg = remove(Image.open(io.BytesIO(img_bytes)).convert("RGBA"), session=SESSION)
    # keep only the largest connected region of the alpha mask — drops stray
    # background fragments (bear paws, smudges) that show badly on white
    a = np.array(fg)
    mask = a[..., 3] > 100
    labels, n = ndimage.label(mask)
    if n >= 1:
        sizes = ndimage.sum(mask, labels, range(1, n + 1))
        keep = (labels == (int(np.argmax(sizes)) + 1))
        # dilate to preserve soft edges, then zero EVERYTHING else (incl. faint ghosts)
        keep = ndimage.binary_dilation(keep, iterations=4)
        a[..., 3] = np.where(keep, a[..., 3], 0)
        fg = Image.fromarray(a)
    box = fg.getbbox()
    if box:
        fg = fg.crop(box)
    return fg


def compose(bg: Image.Image, fg: Image.Image) -> Image.Image:
    canvas = bg.copy()
    # fit garment into the safe area, dead-center
    max_w, max_h = int(CANVAS_W * 0.82), int(CANVAS_H * 0.74)
    scale = min(max_w / fg.width, max_h / fg.height)
    fg = fg.resize((int(fg.width * scale), int(fg.height * scale)), Image.LANCZOS)
    x = (CANVAS_W - fg.width) // 2
    y = (CANVAS_H - fg.height) // 2
    # soft drop shadow
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    alpha = fg.split()[3].point(lambda a: int(a * 0.55))
    shadow.paste((0, 0, 0, 255), (x + 18, y + 26), alpha)
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas = Image.alpha_composite(canvas.convert("RGBA"), shadow)
    canvas.paste(fg, (x, y), fg)
    return canvas.convert("RGB")


def is_white_bg(img_bytes: bytes) -> bool:
    im = Image.open(io.BytesIO(img_bytes)).convert("L").resize((200, 200))
    px = im.load()
    border = [px[x, y] for x in range(200) for y in (0, 1, 198, 199)] + \
             [px[x, y] for y in range(200) for x in (0, 1, 198, 199)]
    bright = sum(1 for v in border if v > 175)
    return bright / len(border) > 0.6


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "samples"
    OUT.mkdir(parents=True, exist_ok=True)
    feed = json.loads((ROOT.parent / "sqs.json").read_text(encoding="utf-8"))
    items = feed["items"]
    if mode == "samples":
        items = [items[0], items[15], items[30]]
    bg = load_white() if mode == "whiteall" else load_background()
    for it in items:
        slug = (it.get("fullUrl") or "").split("/p/")[-1] or "item"
        title = it.get("title", slug)
        imgs = it.get("items") or []
        url = imgs[0]["assetUrl"] if imgs else it.get("assetUrl")
        if not url:
            print(f"SKIP (no image): {title}")
            continue
        if (OUT / f"{slug}.jpg").exists():
            print(f"DONE already: {title}")
            continue
        try:
            data = urllib.request.urlopen(url + "?format=2000w", timeout=30).read()
            if mode == "white" and not is_white_bg(data):
                print(f"SKIP (not white bg): {title}")
                continue
            result = compose(bg, cutout(data))
            out = OUT / f"{slug}.jpg"
            result.save(out, quality=90)
            print(f"OK  {title}  ->  {out.name}")
        except Exception as e:
            print(f"FAIL {title}: {e}")


if __name__ == "__main__":
    main()

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


def load_background() -> Image.Image:
    bg = Image.open(BG_PATH).convert("RGB")
    # crop 4% off each edge to remove the AI watermark, then resize
    w, h = bg.size
    m = int(w * 0.04)
    bg = bg.crop((m, m, w - m, h - m)).resize((CANVAS, CANVAS), Image.LANCZOS)
    # subtle blur + darken so the garment pops at thumbnail size
    bg = bg.filter(ImageFilter.GaussianBlur(6))
    bg = ImageEnhance.Brightness(bg).enhance(0.72)
    return bg


def cutout(img_bytes: bytes) -> Image.Image:
    fg = remove(Image.open(io.BytesIO(img_bytes)).convert("RGBA"), session=SESSION)
    box = fg.getbbox()
    if box:
        fg = fg.crop(box)
    return fg


def compose(bg: Image.Image, fg: Image.Image) -> Image.Image:
    canvas = bg.copy()
    # fit garment into 78% of canvas, centered, slightly low
    max_side = int(CANVAS * 0.78)
    scale = min(max_side / fg.width, max_side / fg.height)
    fg = fg.resize((int(fg.width * scale), int(fg.height * scale)), Image.LANCZOS)
    x = (CANVAS - fg.width) // 2
    y = (CANVAS - fg.height) // 2 + int(CANVAS * 0.03)
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
    bg = load_background()
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

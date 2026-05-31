declare module 'heic-convert' {
  function convert(options: {
    blob: Blob
    toType: string
  }): Promise<Blob>
  export default convert
}

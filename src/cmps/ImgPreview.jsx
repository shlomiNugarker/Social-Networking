export function ImgPreview({ url }) {
  return (
    <section className="img-preview">
      <div className="container">
        <img src={url} alt="" className="img" />
      </div>
    </section>
  )
}

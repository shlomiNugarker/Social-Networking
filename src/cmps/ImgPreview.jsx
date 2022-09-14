export function ImgPreview({ url, isTwoImgs }) {
  return (
    <section className="img-preview">
      <div className="container">
        <img
          src={url}
          alt=""
          className={'img ' + isTwoImgs ? 'img two-imgs' : 'img'}
        />
      </div>
    </section>
  )
}

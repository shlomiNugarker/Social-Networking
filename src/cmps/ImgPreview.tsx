interface Props {
  url: string
  isTwoImgs: boolean
}

export const ImgPreview: React.FC<Props> = ({ url, isTwoImgs }: Props) => {
  return (
    <section className="img-preview">
      <div className="container container-img">
        <img
          src={url}
          alt=""
          className={'img ' + isTwoImgs ? 'img two-imgs' : 'img'}
        />
      </div>
    </section>
  )
}

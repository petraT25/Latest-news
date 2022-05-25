export default function NewsCard(props) {
  const published = `${props.publishedAt.slice(8,10)}-${props.publishedAt.slice(5,7)}-${props.publishedAt.slice(0,4)} ${props.publishedAt.slice(14,19)}`

  return (
    <div className="newsCard">
      <img className="newsCard__image" src={props.image_url} alt="" />
      <div className="newsCard__container">
        <a href={props.url} className="newsCard__link">
          <h3 className="newsCard__title">{props.title}</h3>
        </a>
        <p className="newsCard__description">{props.description}</p>
        <p className="newsCard__published">{published}</p>
      </div>
    </div>
  );
}


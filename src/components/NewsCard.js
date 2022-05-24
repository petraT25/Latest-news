function NewsCard(props) {
  return (
    <div className="newsCard">
      <img className="newsCard__image" src={props.image_url} alt="" />
      <div className="newsCard__container">
        <a href={props.url} className="newsCard__link">
          <h3 className="newsCard__title">{props.title}</h3>
        </a>
        <p className="newsCard__description">{props.description}</p>
        <p className="newsCard__published">{props.publishedAt}</p>
      </div>
    </div>
  );
}

export default NewsCard;
function NewsCard(props) {
  const publishedString = `${props.publishedAt.slice(0, 10)}  ${props.publishedAt.slice(11, 16)}`;
  return (
    <div className="newsCard">
      <img className="newsCard__image" src={props.urlToImage} alt="" />
      <div className="newsCard__container">
        <a href={props.url} className="newsCard__link">
          <h3 className="newsCard__title">{props.title}</h3>
        </a>
        <p className="newsCard__description">{props.description}</p>
        <p className="newsCard__published">{publishedString}</p>
      </div>
    </div>
  );
}

export default NewsCard;
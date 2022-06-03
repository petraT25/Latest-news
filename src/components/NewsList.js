import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

export default function NewsList(props) {
  const [articles, setArticles] = useState([]);
  const [numOfArticles, setNumOfArticles] = useState(6);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EHPaMLVphOKYad2uPMNCMEnriuNgRRhA"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  function loadMore() {
    setNumOfArticles((prevValue) => prevValue + 5);
  }

  return (
    
    <div className={props.darkMode ? "newsList dark" : "newsList"}>
      {articles.slice(0, numOfArticles).map((article) => {
        if(article.multimedia !== null) {
        return (
          <NewsCard
            title={article.title}
            description={article.abstract}
            url={article.url}
            image_url={article.multimedia[1].url}
            publishedAt={article.published_date}
          />
        );
      } else {
        return null
      }})}
      <div className="load-more">
        <button
          className="load-more__button"
          onClick={loadMore}
          style={{
            display: numOfArticles >= articles.length ? "none" : "block",
          }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

export default function NewsList() {
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
    console.log(numOfArticles, articles.length);
    setNumOfArticles((prevValue) => prevValue + 4);
  }

  const styles = {
    display: numOfArticles > articles.length ? "none" : "block"
  }
  

  return (
    <>
      {articles.slice(0, numOfArticles).map((article) => {
        return (
          <NewsCard
            title={article.title}
            description={article.abstract}
            url={article.url}
            image_url={article.multimedia[1].url}
            publishedAt={article.published_date}
          />
        );
      })}
      <div className="load-more">
        <button className="load-more__button" 
                onClick={loadMore}
                style={styles}>
          Load More
        </button>
      </div>
    </>
  );
}

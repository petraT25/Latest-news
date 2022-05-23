import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?language=en&apiKey=543046149566408d9efad4dac3ee4532"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      {articles.map((article) => {
        if (article.image_url !== null) {
          return (
            <NewsCard
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
            />
          );
        }
      })}
    </>
  );
}

export default NewsList;

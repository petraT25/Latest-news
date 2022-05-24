import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.thenewsapi.com/v1/news/top?api_token=xN9wPwTvtR7yDRT0ZxrDdzal7DZmxowgwduEQd6S&language=en&categories=general,science,health,tech,travel"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.data));
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
              image_url={article.image_url}
              publishedAt={article.published_at}
            />
          );
        }
      })}
    </>
  );
}

export default NewsList;

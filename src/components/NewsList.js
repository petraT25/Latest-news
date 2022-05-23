import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_7125a3c8172048dda302224785b83e77c1e4&category=environment,health,science,top&language=en"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <>
      {articles.map((article) => {
        if (article.image_url !== null) {
          return (
            <NewsCard
              title={article.title}
              description={article.description}
              url={article.link}
              image_url={article.image_url}
              pubDate={article.pubDate}
            />
          );
        }
      })}
    </>
  );
}

export default NewsList;

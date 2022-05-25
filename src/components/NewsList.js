import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

export default function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EHPaMLVphOKYad2uPMNCMEnriuNgRRhA"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <>
      {articles.map((article) => {
        if (article.multimedia[1].url !== null) {
          return (
            <NewsCard
              title={article.title}
              description={article.abstract}
              url={article.url}
              image_url={article.multimedia[1].url}
              publishedAt={article.published_date}
            />
          );
        }
      })}
    </>
  );
}



import { useEffect, useState } from "react";
import Article from "./article";

const API = process.env.REACT_APP_API;

function GlobalFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(function () {
    fetch(`${API}/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Global Feed
          </a>
        </li>
      </ul>
      {articles.map((article) => (
        <Article
          image={article.author.image}
          author={article.author.username}
          body={article.body}
          title={article.title}
          date={article.createdAt}
        />
      ))}
    </>
  );
}

export default GlobalFeed;

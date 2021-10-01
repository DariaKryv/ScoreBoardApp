//import { useState } from "react";
import { useState, useEffect } from "react";

import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function ArticleList() {
  const [hiddenArticl, setHiddenArticl] = useState(false);
  const [articles, set_articles] = useState([]);

  const clearNotifications = () => {
    console.log("It is cleaning articles");
    setHiddenArticl(!hiddenArticl);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        console.log("Got back:", result);
        const showData = result.data;
        set_articles(showData);
      } catch (e) {
        console.log(e.message);
      }
    }
    doSomeDataFetching();
  }, []);

  if (!articles.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <br />
      <br />

      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <br />
      <button onClick={clearNotifications}>
        {hiddenArticl ? "Show Articles" : "Clear notifications"}
      </button>
      <div style={{ display: hiddenArticl ? "none" : "block" }}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.body}
          />
        ))}
      </div>
    </div>
  );
}

////////////////////////////////
// {
//   id: 1,
//   title: "What is React all about?",
//   body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
// },
// {
//   id: 2,
//   title: "A lovely kid",
//   body: "In fact, a kid is also the name of a baby goat!",
// },
// {
//   id: 3,
//   title: "On placeholder image URLs",
//   body: "So yeah, you won't be able to look these images up. They're placeholders",
// },

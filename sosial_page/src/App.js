import "./App.css";
import ArticleList from "./components/ArticleList";
import { useState, useEffect } from "react";
import AwesomeAnimals from "./components/AwesomeAnimals";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <LikeCounter />
        <AwesomeAnimals />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;

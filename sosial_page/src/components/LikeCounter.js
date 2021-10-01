//import { useState } from "react"; // <- note the added import of useState
import { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const [likeThis, set_LikeThis] = useState(true);

  const likesIncrement = () => {
    console.log("clicked: ", initial_numLikes);
    set_numLikes(numLikes + 1);
  };

  const resetNumberOfLikes = () => {
    console.log("cliked to reset");
    set_numLikes(initial_numLikes);
  };
  //console.log("what are these?", numLikes, set_numLikes);

  const LikeButton = () => {
    console.log("also cliked");
    set_LikeThis(!likeThis);
  };

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <button onClick={likesIncrement}>Like</button>
      <span>---</span>
      <button onClick={resetNumberOfLikes}>Reset number of Likes</button>
      <p>
        <button onClick={LikeButton}>
          {likeThis ? "Like this" : "Unlike this"}
        </button>
      </p>
    </div>
  );
}

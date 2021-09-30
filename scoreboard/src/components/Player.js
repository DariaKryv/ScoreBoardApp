import "./Player.scss";

// src/components/Player.js
export default function Player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    console.log(props);
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />

      <p>
        {props.name} (score: {props.score})
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

export default function Characters({ data }) {
  console.log(data);

  return (
    <div className="character">
      <div key={data.id}>
        <img src={data.imgUrl} />
        <p>Name: {data.name}</p>
        <p>Born: {data.born}</p>

        <p>
          <Link to={`house/${data.house.name}`}>House: {data.house.name}</Link>
        </p>
        <Link to={`details/${data.id}`}>
          <button>Read more</button>
        </Link>
        {/* <Link to={`details/${data.id}`}>Read more</Link> */}
      </div>
    </div>
  );
}

{
}

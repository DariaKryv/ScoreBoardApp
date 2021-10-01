import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Characters from "../components/Characters";
import "./HomePage.css";

export default function HomePage({ data }) {
  const [characters, setCharacters] = useState([]);
  console.log("Show Characters", characters);
  console.log(data);

  const fetchData = async () => {
    const response = await axios.get(
      "https://hp-assessment-api.herokuapp.com/characters"
    );
    console.log("response from API", response.data);
    setCharacters(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortCharacters = (characters) => {
    return characters.sort((character_a, character_b) => {
      return character_a.name.localeCompare(character_b.name);
    });
  };

  return (
    <div>
      <h1 className="tablo">Characters</h1>
      <div className="our_Characters">
        {!characters
          ? "Loading"
          : sortCharacters(characters).map((character) => {
              return <Characters key={character.name} data={character} />;
            })}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CharacterDetailsPage() {
  const [user, setUser] = useState({});

  const params = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/character/${params.id}`
    );
    console.log("response", response);
    setUser(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <div>
        <h1>{user.name}</h1>
        <img src={user.imgUrl} />
        <div className="user_ditails">
          <p>Was born: {user.born}</p>
          <p>Blood: {user.blood}</p>
          <p>House Id: {user.houseId}</p>
          <p>Species: {user.species}</p>
          <p>Quote: {user.quote}</p>
          <p>Patronus: {user.patronus ?? "NoN"}</p>
          <p>House Animal: {user.house?.animal ?? "Non"}</p>
          <p>Animal Name: {user.house?.name ?? "Non"}</p>
          <p>Animal Color: {user.house?.colors ?? "Non"}</p>
          <p>Animal Founder: {user.house?.founder ?? "Non"}</p>
          <p>Animal Host: {user.house?.ghost ?? "Non"}</p>
        </div>
      </div>

      <Link to="/">
        <button>Homepage</button>
      </Link>
    </div>
  );
}

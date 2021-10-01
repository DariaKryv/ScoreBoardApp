import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HouseDetailsPage() {
  const [house, setHouse] = useState([]);

  const params = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/house/:id `
    );
    console.log("get house");
    console.log("response", response);
    setHouse(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!house) {
    return <p> Loading house user... </p>;
  }
  return (
    <div>
      <Link to="/">
        <button>Homepage</button>
      </Link>

      <h1>House</h1>

      <h1>{house.name}</h1>
      {/* <p>House Animal: {house.house?.animal ?? "Non"}</p> */}

      {/* <div>
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
      </div> */}
    </div>
  );
}

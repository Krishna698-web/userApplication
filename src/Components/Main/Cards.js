import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/user-context";
import Card from "../UI/Card";
import "./Cards.scss";

const Cards = () => {
  const { storedValues, setStoredValues } = useContext(UserContext);

  const fetchDataFromLocalStroage = () => {
    setStoredValues(JSON.parse(localStorage.getItem("users")));
  };

  let filteredCards = [];
  const deleteCard = (userId) => {
    filteredCards = storedValues.filter((val) => val.id !== userId);
    localStorage.setItem("users", JSON.stringify(filteredCards));
  };

  useEffect(() => {
    fetchDataFromLocalStroage();
  }, []);

  return (
    <div className="cards">
      {!storedValues ? (
        <p>Nothing</p>
      ) : (
        storedValues.map((u, i) => (
          <Card key={i} user={u} onDelete={deleteCard} />
        ))
      )}
    </div>
  );
};

export default Cards;

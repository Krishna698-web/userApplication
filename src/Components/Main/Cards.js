import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/user-context";
import Card from "../UI/Card";
import "./Cards.scss";

const Cards = ({ render, onRender }) => {
  const { storedUsers, setStoredUsers } = useContext(UserContext);

  const fetchDataFromLocalStroage = () => {
    setStoredUsers(JSON.parse(localStorage.getItem("users")));
    onRender(false);
  };

  useEffect(() => {
    fetchDataFromLocalStroage();
  }, [render]);

  return (
    <div className="cards">
      {!storedUsers ? (
        <p>Nothing</p>
      ) : (
        storedUsers.map((user, i) => (
          <Card key={i} user={user} onRender={onRender} />
        ))
      )}
    </div>
  );
};

export default Cards;

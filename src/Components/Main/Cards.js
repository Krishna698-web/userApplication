import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/user-context";
import Card from "../UI/Card";

const Cards = () => {
  //   const { Dummy_users } = useContext(UserContext);

  const [storedValues, setStoredValues] = useState([]);

  const fetchDataFromLocalStroage = useCallback(() => {
    setStoredValues(JSON.parse(localStorage.getItem("users")));
    console.log(storedValues);
  }, []);

  useEffect(() => {
    fetchDataFromLocalStroage();
  }, []);

  return (
    <div>
      {!storedValues ? (
        <p>Nothing</p>
      ) : (
        storedValues.map((u, i) => <Card key={i} user={u} />)
      )}
    </div>
  );
};

export default Cards;

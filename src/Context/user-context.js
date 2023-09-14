import React, { createContext } from "react";

const UserContext = createContext({});

const Dummy_users = [
  {
    name: "Manoj",
    age: 22,
    dob: "16/09/2001",
    gender: "MALE",
    food: "MANCHURIAN",
    hobbies: "Surfing on internet",
  },
  {
    name: "Pranesh",
    age: 21,
    dob: "19/04/2002",
    gender: "MALE",
    food: "PIZZA",
    hobbies: "Playing Table tennies",
  },
  {
    name: "Shreekanth",
    age: 22,
    dob: "01/01/2001",
    gender: "MALE",
    food: "PIZZA",
    hobbies: "Reading books",
  },
  {
    name: "Krishna",
    age: 23,
    dob: "11/12/1999",
    gender: "MALE",
    food: "BURGER",
    hobbyies: "Programming",
  },
];

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ Dummy_users }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

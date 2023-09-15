import React, { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [storedUsers, setStoredUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider
      value={{
        showAddUserForm,
        setShowAddUserForm,
        storedUsers,
        setStoredUsers,
        userId,
        setUserId,
        user,
        setUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

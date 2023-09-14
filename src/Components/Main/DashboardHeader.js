import React, { useContext, useState } from "react";
import AddUserForm from "../Forms/AddUserForm";
import "./DashboardHeader.scss";
import { UserContext } from "../../Context/user-context";

const DashboardHeader = ({ onRender }) => {
  const { showForm, setShowForm } = useContext(UserContext);
  return (
    <div className="dash_heading">
      <div>
        <h3>LIST OF USERS</h3>
      </div>
      <div>
        <button onClick={() => setShowForm(!showForm)}>ADD USERS</button>
      </div>
      {showForm && <AddUserForm onRender={onRender} />}
    </div>
  );
};

export default DashboardHeader;

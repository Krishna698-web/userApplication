import React, { useState } from "react";
import AddUserForm from "../Forms/AddUserForm";

const DashboardHeader = () => {
  const [showForm, setShowform] = useState(false);
  return (
    <div>
      <div>
        <h3>LIST OF USERS</h3>
      </div>
      <div>
        <button onClick={() => setShowform(!showForm)}>ADD USERS</button>
      </div>
      {showForm && <AddUserForm />}
    </div>
  );
};

export default DashboardHeader;

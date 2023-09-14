import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Cards from "./Cards";

const Dashboard = () => {
  const [render, setRender] = useState(false);

  return (
    <div>
      <DashboardHeader onRender={setRender} />
      <Cards onRender={setRender} render={render} />
    </div>
  );
};

export default Dashboard;

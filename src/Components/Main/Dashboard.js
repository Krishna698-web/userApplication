import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Cards from "./Cards";
import "./Dashboard.scss";
import Pagination from "./Pagination";

const Dashboard = () => {
  const [render, setRender] = useState(false);
  // console.log(render);

  return (
    <div className="dashboard">
      <DashboardHeader onRender={setRender} />
      <Cards onRender={setRender} render={render} />
      {/* <Pagination /> */}
    </div>
  );
};

export default Dashboard;

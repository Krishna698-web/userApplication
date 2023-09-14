import React from "react";
import { MdAccountCircle } from "react-icons/md";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <div className="menu">
      <div>
        <h2>USER'S INVENTORY</h2>
      </div>
      <div>
        <MdAccountCircle className="icon" />
      </div>
    </div>
  );
};

export default HeaderMenu;

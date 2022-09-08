import React from "react";
import "./Sidebar.css";
import logo from "../../imgs/logo.png";
import { UilEstate } from "@iconscout/react-unicons";
import Sidebarmenu from "./Sidebarmenu";
// import { UilEstate } from "@iconsout/react-unicons";
import {SideBarData} from '../../data/data'
const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          {" "}
          Nano<span>co</span>des
        </span>
      </div>

      {/* menu */}
      <div className="menu">
       
        {SideBarData.map((item,index)=> <Sidebarmenu key={index} item={item} />)}
      </div>
    </div>
  );
};

export default Sidebar;

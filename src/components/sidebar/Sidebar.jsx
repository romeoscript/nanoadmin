import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import Sidebarmenu from "./Sidebarmenu";
import { motion } from "framer-motion";
// import { UilEstate } from "@iconsout/react-unicons";
import { SideBarData } from "../../data/data";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
const sidebarVariants = {
  true:{
    left : '0'
  },
  false:{
    left: '-60%'
  }
}
  return (
    <>
      <div className="bars" style={expanded?{left:'60%'}:{left:'0%'}}
      onClick={()=> setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div className="Sidebar"
      variants={sidebarVariants}
      animate={window.innerWidth<=768? `${expanded}` : ''}
      >
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
          {SideBarData.map((item, index) => (
            <Sidebarmenu key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

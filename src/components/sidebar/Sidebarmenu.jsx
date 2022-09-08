import React,{useState} from "react";
import "./Sidebar.css";
import { UilEstate } from "@iconscout/react-unicons";


const Sidebarmenu = ({item}) => {
  const [active, setActive] = useState(0)
  const displayHandler = () =>{
    setActive(!active)
  }
 if (item.children) {
    return (
        <div className="menu__item" onClick={displayHandler}>
          <div className="menu__title ">
            <div>
              {item.icon}
            </div>
            <span>{item.heading}</span>
          </div>
          <div className={active? 'menu__active': 'menu__content'}>{item.children.map((child, index)=>
            <Sidebarmenu key={index} item={child}/>
          )}</div>
        </div>
      );
 } else{
    return (
        <div className="menu__item " onClick={displayHandler}>
          <div className="menu__title ">
            <div>
              {item.icon}
            </div>
            <span>{item.heading}</span>
          </div>
         
        </div>
      );
 }
};

export default Sidebarmenu;

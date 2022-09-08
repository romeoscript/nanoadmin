import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {
        expanded ? "expanded" : <CompactCard param ={props}/>
       
      }
    </AnimateSharedLayout>
  );
};

//compact card

function CompactCard({ param }) {
  const Png = param.img;
  return (
    <div className="Compact__card"
    style={
    {
      background:param.color.backGround,
      boxShadow:param.color.boxShadow
    }
    }
    >
      <div className="radial__box">
        <CircularProgressbar 
        value={param.barValue}
        text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>last 24 hours</span>
      </div>
    </div>
  );
}
export default Card;

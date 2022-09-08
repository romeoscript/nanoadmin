import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";

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
    <div className="Compact__card">
      <div className="radial__box">Chart</div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>last 24 hours</span>
      </div>
    </div>
  );
}
export default Card;

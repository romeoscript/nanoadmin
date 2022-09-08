import React from 'react'
import './Cards.css'
import Card from '../card/Card'
import  {CardData} from '../../data/data'

const Cards = () => {
  return (
   <div className="cards">
    {CardData.map((card, id)=>{
        return (
            <div className="parentContainer">
                <Card 
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                img={card.img}
                series={card.series}
                />
            </div>
        )
    })}
   </div>
  )
}

export default Cards
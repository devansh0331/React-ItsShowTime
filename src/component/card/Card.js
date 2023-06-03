import React from 'react'

import "./Card.css"

function Card(props) {
  return (
    <div className="mycard">
        <img src={props.showImg} alt=""/>
        <div className="cardName">
            
        <span>{props.name}</span>
        <span id="genre">Drama, Sports</span>
        </div>
        <div className="details">
            <span><strong>Language</strong> : {props.language}</span>
            <span><strong>Time</strong> : {props.time}</span>
            <span><strong>Day</strong> : {props.day}</span>
        </div>
        <a href={props.href}><button onClick={props.click} type="">Read More</button></a> 
      
    </div>
  )
}

export default Card

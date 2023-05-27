import React from 'react';
export default function Card(props) {
  function handleClick() {
    props.onOpenCard(props.card);
  }

  return (
    <div className="elements__element">
      <img className="elements__mask-group" 
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick} />
      <h2 className="elements__text">{props.card.name}</h2>
      <div className="elements__likes"> 
        <button type="button" className="elements__button-like"></button>
        <p className="elements__likes-quantity">{props.card.likes.length}</p>
      </div>
      <button type="button" className={`elements__delete-button
      ${(props.card.owner._id !== props.idOfUser)  && "elements__delete-button_hidden"}`}></button>
    </div>
  )
}
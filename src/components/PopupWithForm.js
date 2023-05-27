import React from "react";
export default function PopupWithForm(props) {
  return (
    <div className={`popup  popup_${props.name} ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button onClick={props.onClose} type="button" className="popup__close-button">
          <img  className="popup__close-icon"  src="<%=require('../images/CloseIcon.svg')%>"  alt="белый  крестик"  />
        </button>
        {props.children}
      </div>
    </div>
  )
}
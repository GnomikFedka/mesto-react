import React from "react";
import CloseIcon from '../images/CloseIcon.svg';
export default function PopupWithForm(props) {
  return (
    <div className={`popup  popup_${props.name} ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
          <button onClick={props.onClose} type="button" className="popup__close-button">
            <img  className="popup__close-icon"  src={CloseIcon}  alt="белый  крестик"  />
          </button>
          <form  className="popup__edit-form" name={props.name} onSubmit={props.onSubmit} noValidate>
            {props.children}
            <button  type="submit"  className="popup__button-save">{props.buttonText}</button>
          </form>
      </div>
    </div>
  )
}
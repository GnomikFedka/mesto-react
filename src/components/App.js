import  '../index.css';
import Header  from  './Header';
import Main  from  './Main';
import Footer  from  './Footer';
import PopupWithForm  from  './PopupWithForm';
import React from 'react';
import ImagePopup from "./ImagePopup";
const { useState} = React;

function  App()  {
  const [isEditProfilePopupOpen, openEditProfilePopup] = useState(false); 
  const [isAddPlacePopupOpen, openAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopup] = useState(false);
  const [isCardOpen, openCardPopup] = useState(null);

/*  function popupEditProfileClick() {
    return (
    <form  className="popup__edit-form"  id="name-field-of-activity"  name="nameFieldOfActivity"  noValidate>
      <h3  className="popup__title">Редактировать  профиль</h3>
      <input  className="popup__input  popup__input_type_name"  id="nameInput"  name="name"  placeholder="Имя"  required
      minLength="2"  maxLength="40"  />
      <span  className="popup__input  popup__input_type_error  nameInput-error"></span>
      <input  className="popup__input  popup__input_type_field-of-activity"  id="fieldOfActivityInput"  placeholder="О  себе"
      name="about"  required  minLength="2"  maxLength="200"  />
      <span  className="popup__input  popup__input_type_error  fieldOfActivityInput-error"></span>
      <button  type="submit"  className="popup__button-save">Сохранить</button>
    </form>)
  }

  function popupAddPlaceClick() {
    return (
    <form  className="popup__edit-form"  id="create-element"  name="creatElement"  noValidate>
      <h3  className="popup__title">Новое  место</h3>
      <input  className="popup__input  popup__input_type_name"  id="fotoName-input"  name="name"  placeholder="Название"
        required  minLength="2"  maxLength="30"  />
      <span  className="popup__input  popup__input_type_error  fotoName-input-error"></span>
      <input  type="url"  className="popup__input  popup__input_type_field-of-activity"  id="fotoUrl-input"
        name="link"  placeholder="Ссылка  на  фото"  required  />
      <span  className="popup__input  popup__input_type_error  fotoUrl-input-error"></span>
      <button  type="submit"  className="popup__button-save">Создать</button>
    </form>)
  }

  function popupEditAvatarClick() {
    return (
    <form  className="popup__edit-form"  id="changeAvatar"  name="changeAvatar"  noValidate>
      <h3  className="popup__title">Обновить  аватар</h3>
      <input  type="url"  className="popup__input  popup__input_type_field-of-activity"  id="avatarFoto"
        name="avatar"  placeholder="Ссылка  на  фото"  required  />
      <span  className="popup__input  popup__input_type_error  avatarFoto-error"></span>
      <button  type="submit"  className="popup__button-save">Сохранить</button>
    </form>)
  }

  function popupDeleteClick() {
    return (
    <div  className="popup__edit-form">
      <h3  className="popup__title">Вы  уверены?</h3>
      <button  type="button"  className="popup__button-save  popup__button-delete">Да</button>
    </div>)
  } */

  function handleEditAvatarClick() {
    openEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    openEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    openAddPlacePopup(true);
  }

  function handleCardClick(card) {
    openCardPopup(card);
  }

  function closeAllPopups() {
    openEditAvatarPopup(false);
    openEditProfilePopup(false);
    openAddPlacePopup(false);
    openCardPopup(null);
  }

  return  (
    <div  className="App">
      <div  className="page">
        <Header  />
        <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onOpenCard={handleCardClick}
        />
        <Footer  />
        <PopupWithForm  name="name-field-of-activity" title="Редактировать  профиль" isOpen={isEditProfilePopupOpen}
         onClose={closeAllPopups} children={ <form  className="popup__edit-form"  id="name-field-of-activity"  name="nameFieldOfActivity"
         noValidate>
         <h3  className="popup__title">Редактировать  профиль</h3>
         <input  className="popup__input  popup__input_type_name"  id="nameInput"  name="name"  placeholder="Имя"  required
         minLength="2"  maxLength="40"  />
         <span  className="popup__input  popup__input_type_error  nameInput-error"></span>
         <input  className="popup__input  popup__input_type_field-of-activity"  id="fieldOfActivityInput"  placeholder="О  себе"
         name="about"  required  minLength="2"  maxLength="200"  />
         <span  className="popup__input  popup__input_type_error  fieldOfActivityInput-error"></span>
         <button  type="submit"  className="popup__button-save">Сохранить</button>
       </form>} />
        <PopupWithForm  name="new-element" title="Новое  место" isOpen={isAddPlacePopupOpen}
         onClose={closeAllPopups} children={<form  className="popup__edit-form"  id="create-element"  name="creatElement"  noValidate>
        <h3  className="popup__title">Новое  место</h3>
         <input  className="popup__input  popup__input_type_name"  id="fotoName-input"  name="name"  placeholder="Название"
           required  minLength="2"  maxLength="30"  />
         <span  className="popup__input  popup__input_type_error  fotoName-input-error"></span>
         <input  type="url"  className="popup__input  popup__input_type_field-of-activity"  id="fotoUrl-input"
           name="link"  placeholder="Ссылка  на  фото"  required  />
         <span  className="popup__input  popup__input_type_error  fotoUrl-input-error"></span>
         <button  type="submit"  className="popup__button-save">Создать</button>
       </form>} />
        <PopupWithForm  name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}
         onClose={closeAllPopups} children={ <form  className="popup__edit-form"  id="changeAvatar"  name="changeAvatar"  noValidate>
         <h3  className="popup__title">Обновить  аватар</h3>
         <input  type="url"  className="popup__input  popup__input_type_field-of-activity"  id="avatarFoto"
           name="avatar"  placeholder="Ссылка  на  фото"  required  />
         <span  className="popup__input  popup__input_type_error  avatarFoto-error"></span>
         <button  type="submit"  className="popup__button-save">Сохранить</button>
       </form>} />
        <PopupWithForm  name="delete" title="Вы уверены?" children={ <div  className="popup__edit-form">
      <h3  className="popup__title">Вы  уверены?</h3>
      <button  type="button"  className="popup__button-save  popup__button-delete">Да</button>
    </div>}/>
        <ImagePopup card={isCardOpen} onClose={closeAllPopups} />
      </div>
    </div>
  );
}
export  default  App;
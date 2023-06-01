import api from '../utils/Api';
import Pen from '../images/pen.svg';
import Plus from '../images/plus.svg';
import React from 'react';
import Card from './Card';
const { useState, useEffect} = React;
export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.apiGetUserJson(),
      api.apiGetCardsJson()
    ])
    .then(([userData, cardsData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(cardsData);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }, [])
  
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-foto" src={userAvatar} alt="аватарка пользователя" />
          <div onClick={props.onEditAvatar} className="profile__overlay">
            <img onClick={props.onEditAvatar} className="profile__pen-avatar" src={Pen} alt="изменение имени и вида деятельности" />
          </div>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__name">{userName}</h1>
          <button onClick={props.onEditProfile} type="button" className="profile__edit-button">
            <img className="profile__pen" src={Pen} alt="изменение имени и вида деятельности" />
          </button>
          <p className="profile__field-of-activity">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button">
          <img className="profile__plus" src={Plus} alt="добавление новой карточки" />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card 
          card={card}
          key={card._id}
          onOpenCard={props.onOpenCard} />
        ))}
      </section>
    </main>
  )
}
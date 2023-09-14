import React from "react";
import "./Card.scss";

const Card = ({ user, onDelete }) => {
  const deleteCard = (userId) => {
    // console.log(userId);
    onDelete(userId);
  };

  return (
    <div className="card">
      <div className="card_head">
        <h4>Name: {user.name}</h4>
        <span>color</span>
      </div>
      <div className="user_info">
        <div className="field">
          <span>AGE:</span>
          <span>{user.age}</span>
        </div>
        <div className="field">
          <span>DOB:</span>
          <span>{user.dob}</span>
        </div>
        <div className="field">
          <span>GENDER:</span>
          <span>{user.gender}</span>
        </div>
        <div className="field">
          <span>FOOD:</span>
          <span>{user.food}</span>
        </div>
        <div className="field">
          <span>HOBBIES:</span>
          <span>{user.hobbies}</span>
        </div>
      </div>
      <div className="buttons">
        <button className="del_btn" onClick={() => deleteCard(user.id)}>
          DELETE
        </button>
        <button className="view_btn">VIEW</button>
        <button className="edit_btn">EDIT</button>
      </div>
    </div>
  );
};

export default Card;

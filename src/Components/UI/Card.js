import React from "react";

const Card = ({ user }) => {
  return (
    <div>
      <div>
        <h3>Name: {user.name}</h3>
        <span>color</span>
      </div>
      <div>
        <div>
          <span>AGE:</span> <span>{user.age}</span>
        </div>
        <div>
          <span>DOB:</span>
          <span>{user.dob}</span>
        </div>
        <div>
          <span>GENDER:</span>
          <span>{user.gender}</span>
        </div>
        <div>
          <span>FOOD:</span>
          <div>{user.food}</div>
        </div>
        <div>
          <span>HOBBIES:</span>
          <div>{user.hobbies}</div>
        </div>
      </div>
      <div>
        <button>DELETE</button>
        <button>VIEW</button>
        <button>EDIT</button>
      </div>
    </div>
  );
};

export default Card;

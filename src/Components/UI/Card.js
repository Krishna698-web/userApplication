import React, { useContext, useEffect, useState } from "react";
import "./Card.scss";
// import EditUserForm from "../Forms/EditUserForm";
import { UserContext } from "../../Context/user-context";
import EditUserForm from "../Forms/EditUserForm";
import ViewUserForm from "../Forms/ViewUserForm";

const Card = ({ user, onRender }) => {
  const { setUser, storedUsers } = useContext(UserContext);

  const [showEditUserForm, setShowEditUserForm] = useState(false);

  const [viewForm, setViewForm] = useState(false);

  const deleteCardHandler = (userId) => {
    let filteredCards = storedUsers.filter((val) => val.id !== userId);
    localStorage.setItem("users", JSON.stringify(filteredCards));
    onRender(true);
  };

  const viewFormHandler = (userId) => {
    setViewForm(true);
    setUser(storedUsers.filter((u) => u.id === userId));
  };

  const editUserHandler = (userId) => {
    setShowEditUserForm(true);
    setUser(storedUsers.filter((u) => u.id === userId));
  };

  console.log(typeof parseInt(user.age));

  const colorHandler = () => {
    let colorClass = "";
    if (parseInt(user.age) > 0 && parseInt(user.age) < 25) {
      colorClass = "green";
    } else if (parseInt(user.age) >= 25 && parseInt(user.age) < 50) {
      colorClass = "purple";
    } else {
      colorClass = "orange";
    }

    return colorClass;
  };

  useEffect(() => {
    console.log(colorHandler());
  }, []);

  return (
    <div className="card">
      <div className="card_head">
        <h4>{user.name}</h4>
        <span className={`color ${colorHandler()}`}></span>
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
        <div>
          <button
            className="del_btn"
            onClick={() => deleteCardHandler(user.id)}>
            DELETE
          </button>
        </div>
        <div>
          <button className="view_btn" onClick={() => viewFormHandler(user.id)}>
            VIEW
          </button>
          {viewForm && <ViewUserForm onViewForm={setViewForm} />}
        </div>
        <div>
          <button className="edit_btn" onClick={() => editUserHandler(user.id)}>
            EDIT
          </button>
          {showEditUserForm && (
            <EditUserForm
              onShowEditForm={setShowEditUserForm}
              onRender={onRender}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

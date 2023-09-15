import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { UserContext } from "../../Context/user-context";
import "./ViewUserForm.scss";

const ViewUserForm = ({ onViewForm }) => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <Modal onClose={() => onViewForm(false)} />
      <div className="user_form">
        <h2>VIEW USER</h2>
        <div className="input_fields">
          <div className="left_form">
            <div>
              <span className="name">NAME</span>
              <p>{user[0].name}</p>
            </div>
            <div>
              <span className="dob">DOB</span>
              <p>{user[0].dob}</p>
            </div>
            <div>
              <span className="food">FAVOURITE FOOD</span>
              <p>{user[0].food}</p>
            </div>
          </div>
          <div className="right_form">
            <div>
              <span className="age">AGE</span>
              <p>{user[0].age}</p>
            </div>
            <div>
              <span className="gender">GENDER</span>
              <p>{user[0].gender}</p>
            </div>
            <div>
              <span className="hobbies">HOBBIES</span>
              <p>{user[0].hobbies}</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" onClick={() => onViewForm(false)}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewUserForm;

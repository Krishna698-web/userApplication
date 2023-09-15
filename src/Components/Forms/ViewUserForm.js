import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { UserContext } from "../../Context/user-context";

const ViewUserForm = ({ onViewForm }) => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <Modal onClose={() => onViewForm(false)} />
      <div className="add_user_form">
        <h2>VIEW USER</h2>
        <div className="input_fields">
          <div className="left_form">
            <div>
              <label htmlFor="name">NAME</label>
              <p>{user[0].name}</p>
            </div>
            <div>
              <label htmlFor="dob">DOB</label>
              <p>{user[0].dob}</p>
            </div>
            <div>
              <label htmlFor="food">FAVOURITE FOOD</label>
              <p>{user[0].food}</p>
            </div>
          </div>
          <div className="right_form">
            <div>
              <label htmlFor="age">AGE</label>
              <p>{user[0].age}</p>
            </div>
            <div>
              <label htmlFor="gender">GENDER</label>
              <p>{user[0].gender}</p>
            </div>
            <div>
              <label htmlFor="hobbies">HOBBIES</label>
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

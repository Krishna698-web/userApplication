import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/user-context";
import Modal from "../UI/Modal";

const EditUserForm = ({ onShowEditForm, onRender }) => {
  const { user, storedUsers, setStoredUsers } = useContext(UserContext);

  const [name, setName] = useState(user[0].name);
  const [dob, setDob] = useState(user[0].dob);
  const [food, setFood] = useState(user[0].food);
  const [age, setAge] = useState(user[0].age);
  const [gender, setGender] = useState(user[0].gender);
  const [hobbies, setHobbies] = useState(user[0].hobbies);

  const [editedUsers, setEditedUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(editedUsers));
  }, [editedUsers]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("click");

    let info = {
      name: name.length > 0 ? name : alert("Please enter name"),
      dob,
      food,
      age,
      gender,
      hobbies,
      id: user[0].id,
    };

    let newUsers = storedUsers.filter((s) => s.id !== info.id);
    setEditedUsers(() => {
      const updatedUsers = [info, ...newUsers];
      setName("");
      setDob("");
      setFood("");
      setAge("");
      setGender("");
      setHobbies("");
      onShowEditForm(false);
      return updatedUsers;
    });

    // console.log("storedUsers", editedUsers);

    onRender(true);
  };

  return (
    <>
      <Modal onClose={() => onShowEditForm(false)} />
      <form onSubmit={submitHandler} className="user_form">
        <h2>EDIT USER</h2>
        <div className="input_fields">
          <div className="left_form">
            <div>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="food">FAVOURITE FOOD</label>
              <select
                name="food"
                id="food"
                value={food}
                onChange={(e) => setFood(e.target.value)}>
                <option value="PIZZA">PIZZA</option>
                <option value="BURGER">BURGER</option>
                <option value="PASTA">PASTA</option>
                <option value="MANCHURIAN">MANCHURIAN</option>
              </select>
            </div>
          </div>
          <div className="right_form">
            <div>
              <label htmlFor="age">AGE</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="gender">GENDER</label>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value={"MALE"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male">MALE</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={"FEMALE"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female">FEMALE</label>
              </div>
            </div>
            <div>
              <label htmlFor="hobbies">HOBBIES</label>
              <textarea
                name="hobbies"
                id="hobbies"
                cols="30"
                rows="10"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}></textarea>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" onClick={() => onShowEditForm(false)}>
            CANCEL
          </button>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default EditUserForm;

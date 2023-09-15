import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/user-context";
import Modal from "../UI/Modal";

const EditUserForm = ({ onShowEditForm, onRender }) => {
  const { user, storedUsers, setStoredUsers, setShowAddUserForm } =
    useContext(UserContext);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [food, setFood] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(storedUsers));
  }, [storedUsers]);

  const submitHandler = (e) => {
    e.preventDefault();

    let info = {
      name: name.length > 0 ? name : alert("Please enter name"),
      dob:
        dob !== null || undefined
          ? dob
          : alert("Please enter your date of birth"),
      food: food.length > 0 ? food : alert("Please select your food"),
      age: age.length > 0 ? age : alert("Please enter your age"),
      gender: gender.length > 0 ? gender : alert("Please specify your gender"),
      hobbies:
        hobbies.length > 0 ? hobbies : alert("Please mention your hobbies"),
      id: Math.random(),
    };

    storedUsers.filter((sUser) => {
      if (sUser.id === user.id) {
        setStoredUsers((prevUsers) => {
          const updatedUsers = [info, ...prevUsers];
          setName("");
          setDob("");
          setFood("");
          setAge("");
          setGender("");
          setHobbies("");
          setShowAddUserForm(false);
          return updatedUsers;
        });
      }
    });

    onRender(true);
  };

  return (
    <>
      <Modal onClose={() => onShowEditForm(false)} />
      <form onSubmit={submitHandler} className="add_user_form">
        <h2>EDIT USER</h2>
        <div className="input_fields">
          <div className="left_form">
            <div>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                value={user[0].name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                id="dob"
                value={user[0].dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="food">FAVOURITE FOOD</label>
              <select
                name="food"
                id="food"
                value={user[0].food}
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
                value={user[0].age}
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
                value={user[0].hobbies}
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

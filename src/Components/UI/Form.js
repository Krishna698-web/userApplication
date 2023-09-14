import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { UserContext } from "../../Context/user-context";

const getUsersInfo = () => {
  const localValue = localStorage.getItem("users");
  if (!localValue) {
    return [];
  } else {
    return JSON.parse(localValue);
  }
};

const Form = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [food, setFood] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [users, setUsers] = useState(getUsersInfo);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const submitHandler = (e) => {
    e.preventDefault();

    let info = {
      name: name.length > 0 ? name : alert("Please enter name"),
      dob,
      food,
      age,
      gender,
      hobbies,
      id: Math.random(),
    };

    setUsers((users) => [info, ...users]);

    setName("");
    setDob("");
    setFood("");
    setAge("");
    setGender("");
    setHobbies("");
  };

  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <div>
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
        <div>
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
        <div>
          <button type="button">CANCEL</button>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;

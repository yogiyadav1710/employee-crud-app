import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    let navigate = useNavigate();
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    age: "",
    salary: ""
  });

  const { name, age, salary } = newEmployee;
  const onInputChange = e => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(newEmployee);
    await axios.post("http://localhost:3003/emp", newEmployee);
    navigate('/view');
  };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Add A User</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Age"
            name="age"
            value={age}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Salary"
            name="salary"
            value={salary}
            onChange={e => onInputChange(e)}
          />
        </div>
        
        <button className="btn btn-primary btn-block">Add User</button>
      </form>
    </div>
  </div>
);
};

export default Add
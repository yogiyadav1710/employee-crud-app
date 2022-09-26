import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EmpDetails = () => {

    const [employees, setEmployees] = useState({
        name: "",
        age: "",
        salary: ""
    });
    const { id } = useParams();
    useEffect(() => {
        ShowEmployees();
    }, []);
    const ShowEmployees = async () => {
        const res = await axios.get(`http://localhost:3000/emp/${id}`);
        setEmployees(res.data);
    };

    return (
        <>
            <div className="container py-4">
                <Link className="btn btn-primary" to="/view">
                    back to Home
                </Link>
                <h1 className="display" >Employee Id: {id}</h1>
                <hr />
                <ul className="list-group w-50 ">
                    <li className="list-group-item">Employee Name: {employees.name}</li>
                    <li className="list-group-item">Age: {employees.age}</li>
                    <li className="list-group-item">Salary: {employees.salary}</li>
                </ul>
            </div>
        </>
    )
}

export default EmpDetails
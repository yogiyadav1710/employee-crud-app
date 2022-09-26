import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from "react-router-dom";
import Popup from './Popup';
import EmpDetails from './EmpDetails';
const Data = ({ item, deleteEmployee }) => {

    const [onDelete, setOnDelete] = useState(false)
    const [itemID, setItemId] = useState();

    return (
        <>

            {onDelete ? <Popup deleteEmployee={deleteEmployee} setOnDelete={setOnDelete} itemID={itemID} /> : (
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Employee Age</th>
                            <th scope="col">Employee Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {item.map((item, index) => {
                        return (
                            <tbody key={item.id}>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <Link className="btn btn-danger ml-4 "
                                            onClick={() => {
                                                setOnDelete(true)
                                                setItemId(item.id)
                                            }}
                                        >Delete</Link>
 
                                        <Link className="btn btn-primary ml-8 "  to={`/emp/${item.id}`} 

                                        >View</Link>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}

                </table>

            )}
        </>
    )
}

export default Data

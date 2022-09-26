import React from 'react'
import { Link } from "react-router-dom";
import '../css/Navbar.css'
function Popup({ deleteEmployee, itemID, setOnDelete }) {
    return (
        <>
            <div className='PopUp' >
                <div id='container'>
                    <div id='dialogue'>
                        <h4>Are you sure want to delete ?</h4>
                    </div>

                    <div id='action' >
                        <button className="btn btn-danger mb-2 mt-2"
                            onClick={() => {
                                deleteEmployee(itemID)
                                setOnDelete(false)
                            }}
                        >Yes</button>

                        <button className="btn btn-danger  mb-2 mt-2"
                            onClick={() => setOnDelete(false)}
                        >No</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Popup

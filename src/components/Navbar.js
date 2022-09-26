import React from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id='head'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink className="navbar-brand" to="/view">CRUD APP</NavLink>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/add" style={{color: 'black', textDecoration: 'none'}} >ADD
                                    {/* <spa className="sr-only">(current)</spa> */}
                                </NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink className="nav-link" to="/view" style={{color: 'black', textDecoration: 'none'}} >VIEW</NavLink>

                            </li> 
                        
                        </ul>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar

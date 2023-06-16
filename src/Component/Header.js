import React from "react";
import { MdCastForEducation } from 'react-icons/md'
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <span className="navbar-brand">
                        { " " }
                        <MdCastForEducation size='30px'/> Student Portal { " "}
                    </span>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/header">Add New</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userslist">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Logout {" "}</Link>
                        </li>
                        
                    </ul>

                </div>

            </nav>
        </div>
    )
}
export default Header
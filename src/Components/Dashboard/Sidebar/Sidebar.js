import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../../App'
import { AppointmentContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [, , isDoctor, setIsDoctor] = useContext(AppointmentContext)

    const logOutHandeler = () => {
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        localStorage.removeItem('response');
    }
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {
                    isDoctor && <li>
                        <Link to="/doctor/appointment" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Admin</span>
                        </Link>
                    </li>
                }
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Dashboard</span>
                    </Link>
                </li>
                {
                    isDoctor && <div>
                        <li>
                            <Link to="/doctor/allPatient" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/prescriptions" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addDoctor" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>
                <li onClick={logOutHandeler}>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </li>
            </div>
        </div>
    );
};

export default Sidebar;
import React from "react";
import { Nav } from "react-bootstrap";
import Modal from "react-modal";
import { Link, useLocation } from "react-router-dom";
import Ambulance from "./Ambulance";
import BloodDonarList from "./BloodDonarList";
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  let whiteText;
  if (location.pathname === "/") {
    whiteText = "text-white";
  } else {
    whiteText = "";
  }

  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [bloodModalIsOpen, setbloodModalIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function closeBloodModal() {
    setbloodModalIsOpen(false);
  }

  const emergencyHandeler = (status) => {
    console.log(status);
    if (status === "Ambulance") {
      setIsOpen(true);
    } else if (status === "Blood Donation") {
      setbloodModalIsOpen(true);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {" "}
            <span>DP</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">              
              <li className="nav-item">
                <Link to="/" className="nav-link mr-4">
                  {" "}
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor/dashboard" className="nav-link mr-4">
                  {" "}
                  <span>Dashboard</span>
                </Link>
              </li>             
              
              <li className="nav-item">
                <Nav.Link href="#Appointment" className="mr-4">
                  Appointment
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Doctors" className={`mr-4 ${whiteText}`}>
                  Doctors
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Contact" className={`mr-4 ${whiteText}`}>
                  Contact
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link  className="mr-4">
                  <div class="dropdown ">
                  <button class="dropbtn">Services</button>
                  <div class="dropdown-content">
                    <a onClick={(e) => emergencyHandeler("Ambulance")} >Ambulance</a>
                    <a onClick={(e) => emergencyHandeler("Blood Donation")} >Blood Donation</a>
                  </div>
                </div>
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
        <Ambulance
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        ></Ambulance>
        <BloodDonarList
          modalIsOpen={bloodModalIsOpen}
          closeModal={closeBloodModal}
        ></BloodDonarList>
      </nav>
    </div>
  );
};

export default Navbar;

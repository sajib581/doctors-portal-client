import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  let whiteText;
  if (location.pathname == '/') {
    whiteText = "text-white"
  }
  else {
    whiteText = ""
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"> <span>DP</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link mr-4"> <span>Home</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor/dashboard" className="nav-link mr-4"> <span>Dashboard</span></Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Service" className="mr-4">Service</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Appointment" className="mr-4">Appointment</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Testimonial" className={`mr-3 ${whiteText}`}>  Testimonial</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Blogs" className={`mr-4 ${whiteText}`}>Blogs</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Doctors" className={`mr-4 ${whiteText}`}>Doctors</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="#Contact" className={`mr-4 ${whiteText}`}>Contact</Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
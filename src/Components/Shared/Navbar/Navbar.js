import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link mr-5 active" aria-current="page" href="#">Home</a> */}
                <Link to="/" className="nav-link mr-5"> <span>Home</span></Link>
              </li>
              <li class="nav-item">
                <Link to="" className="nav-link mr-5"> <span>About</span></Link>
              </li>
              <li class="nav-item">
                <Link to="/doctor/dashboard" className="nav-link mr-5"> <span>Dashboard</span></Link>
              </li>
              <li class="nav-item">
                <Link to="" className="nav-link mr-5 text-white"> <span>Reviews</span></Link>
              </li>
              <li class="nav-item">
                <Link to="" className="nav-link mr-5 text-white"> <span>Blogs</span></Link>
              </li>
              <li class="nav-item">
                <Link to="" className="nav-link mr-5 text-white"> <span>Contact Us</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
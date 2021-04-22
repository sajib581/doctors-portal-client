import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{ height: "600px" }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Your New Smile <br />Start Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque magnamque error inventore! Tenetur</p>
                <Link to="/appointment" className="text-white">
                    <button className="btn btn-primary">GET APPOINTMENT</button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={"https://r.franchisesamerica.com/loaded/content/1537981027_ed53b.jpg"} className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;
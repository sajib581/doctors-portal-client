import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/doctor.png'
import './appointment.css'

const Appointment = () => {
    return (
        <section className="make-appointment my-5" id="Appointment">
            <div className="container">
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <div>
                        <h5 className="text-primary">APPOINTMENT</h5>
                        <h1 className="my-4">Make an appointment <br />Today </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi earum quidem! Praesentium, totam similique?</p>
                        {/* <button className="btn btn-primary">Learn More</button> */}
                        <Link to="/appointment" className="btn btn-primary"> <span>Learn More</span></Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Appointment;
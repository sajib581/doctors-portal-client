import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointMentHeader = ({handelChange}) => {
    
    return (
        <main style={{ height: "600px" }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Appointment</h1>     
                <div>
                    <Calendar
                        onChange={handelChange} 
                        value={new Date()}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <img src="https://riseapps.co/wp-content/uploads/2020/05/img_Doctor-Appointment-App-1024x768-min-1024x768.jpg" className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default AppointMentHeader;


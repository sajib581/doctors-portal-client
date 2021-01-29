import React from 'react';
import AppointmentShortList from '../AppointmentShortList.js/AppointmentShortList';

const AppointmentsByDate = ({ appointments, date }) => {

    return (
        <div className="p-3 " style={{ backgroundColor: 'white', marginTop: "60px", minHeight: "445px" }}>
            <div className="d-flex justify-content-between mb-3">
                <h4 className="text-brand ">Appointments</h4>
                <h4>{date}</h4>
            </div>
            {
                appointments.length ?
                    <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                    :
                    <div className="p-5">
                        <h3 className="mt-5 blockquote text-center">No Appointments for this Date</h3>
                    </div>
            }
        </div>
    );
};

export default AppointmentsByDate;
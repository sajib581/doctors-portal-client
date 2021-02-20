import React from 'react';
import AppointmentShortList from '../AppointmentShortList.js/AppointmentShortList';

const AppointmentsByDate = ({ appointments, date }) => {
    const email = localStorage.getItem("email")
    const name = localStorage.getItem("name")

    var retrievedObject = localStorage.getItem('response');
    const userData = JSON.parse(retrievedObject)

    return (
        <section>
            <div className="d-flex justify-content-between ">
                {
                    userData.photo && <img style={{ height: "60px", borderRadius: "50%" }} src={userData.photo} alt="" />
                }   {
                    email !== "null" && <h5 className="mt-2">email : {email}</h5>
                }
                {
                    email === "null" && <h5 className="mt-2">name : {name}</h5>
                }
            </div>

            <div className="p-3 " style={{ backgroundColor: 'white', marginTop: "10px", minHeight: "445px" }}>
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
        </section>
    );
};

export default AppointmentsByDate;
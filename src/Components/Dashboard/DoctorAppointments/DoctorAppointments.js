import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './Calender.css'
import { AppointmentContext, UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100vh"
}
const DoctorAppointments = () => {

    const parsingDate = () => {
        const m = moment(new Date(), moment.ISO_8601)
        const parsingDate = m.format("L")
        return parsingDate;
    }

    const [selectedDate, setSelectedDate] = useState(parsingDate());
    const [appointments, setAppointments] = useState([])
    const [, , isDoctor, setIsDoctor] = useContext(AppointmentContext)

    useEffect(() => {
        const email = localStorage.getItem("email")
    
        fetch("https://ancient-sea-70147.herokuapp.com/isDoctor", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email })
        })
          .then(response => response.json())
          .then(data => {
            setIsDoctor(data)
          })
      }, [])

    const handelChange = date => {
        console.log("Hitted handelchange");
        const m = moment(date, moment.ISO_8601)
        const parsingDate = m.format("L")
        setSelectedDate(parsingDate);
    }
    const email = JSON.parse(localStorage.getItem('response')).email
    const name = JSON.parse(localStorage.getItem('response')).name
    const uid = JSON.parse(localStorage.getItem('response')).uid

    useEffect(() => {
        fetch('https://ancient-sea-70147.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: email, name:name, uid:uid})
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [selectedDate])
    return (
        <section style={containerStyle} className="container-fluid row px-0 mr-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 ">
                    <div className="ml-4">
                        <h3 className="my-4">Appointments</h3>
                        <Calendar
                            onChange={handelChange}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-6 pt-4">
                    <AppointmentsByDate 
                    appointments={appointments}
                    date = {selectedDate}
                    ></AppointmentsByDate>
                </div>
            
        </section>
    );
};

export default DoctorAppointments;
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
    const [loggedInUser, setLoggedInUser] = useContext( UserContext)

    const parsingDate = () => {
        const m = moment(new Date(), moment.ISO_8601)
        const parsingDate = m.format("L")
        return parsingDate;
    }

    const [selectedDate, setSelectedDate] = useState(parsingDate());
    const [appointments, setAppointments] = useState([])
    const [, , isDoctor, setIsDoctor] = useContext(AppointmentContext)

    useEffect(() => {
        const email = sessionStorage.getItem("email")
    
        fetch("http://localhost:5000/isDoctor", {
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
        const m = moment(date, moment.ISO_8601)
        const parsingDate = m.format("L")
        setSelectedDate(parsingDate);
    }

    const email = sessionStorage.getItem("email")
    const name = sessionStorage.getItem("name")
    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: email, name:name})
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
                <div className="col-md-5 ">
                    <div className="ml-4">
                        <h3 className="my-4">Appointments</h3>
                        <Calendar
                            onChange={handelChange}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-5 pt-4">
                    <AppointmentsByDate 
                    appointments={appointments}
                    date = {selectedDate}
                    ></AppointmentsByDate>
                </div>
            
        </section>
    );
};

export default DoctorAppointments;
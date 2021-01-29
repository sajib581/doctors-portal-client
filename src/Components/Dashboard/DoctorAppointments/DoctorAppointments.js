import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './Calender.css'

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

    const handelChange = date => {
        const m = moment(date, moment.ISO_8601)
        const parsingDate = m.format("L")
        setSelectedDate(parsingDate);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
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
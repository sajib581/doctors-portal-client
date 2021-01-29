import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Statistics from '../Statistics/Statistics';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const Dashboard = () => {
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
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: "100vh" }}>
                <h5 className="">Patients</h5>
                <Statistics></Statistics>
            </div>
        </div>
    );
};

export default Dashboard;


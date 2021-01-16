import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointMentHeader from '../AppointMentHeader/AppointMentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()) ;
    const handelChange = date =>{
        setSelectedDate(date)
    }
    console.log(selectedDate);
    return (
        <div> 
            <Navbar></Navbar>
            <AppointMentHeader handelChange={handelChange}></AppointMentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;
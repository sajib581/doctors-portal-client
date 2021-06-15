import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
            <Testimonials ></Testimonials>
            <Blogs></Blogs>
            <Doctors ></Doctors> 
            <Contact></Contact>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;
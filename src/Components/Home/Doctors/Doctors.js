import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import 'swiper/swiper.scss';
import './Doctors.css'
const Doctors = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch("https://ancient-sea-70147.herokuapp.com/doctors")
            .then(response => response.json())
            .then(data => {
                setDoctors(data)
            })
    }, [])
    return (
        <div className='mb-5 carousel-container' id="Doctors">
            <div>
                <h3 className='text-center text-white mb-3 pb-4 pt-5'>Here are some of <span style={{ color: '#7AB259' }}> our Doctors</span></h3>
            </div>
            <div className='carousel-slider'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    autoplay={{
                        delay: 2100,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {
                        doctors.map((doctor, index) => <SwiperSlide key={index}>
                            <Doctor
                                name={doctor.name}
                                email={doctor.email}
                                img={doctor.img}
                                index={index}
                            ></Doctor>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};



export default Doctors;
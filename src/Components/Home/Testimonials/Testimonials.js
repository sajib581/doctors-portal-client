import React, { useState } from 'react';
// import Swiper from 'swiper';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import quotePic from '../../../images/quote.png';
import Testimonial from '../Testimonial/Testimonial';



const Testimonials = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    const [testimonialData, setTestimonialData] = useState([])

    fetch('https://ancient-sea-70147.herokuapp.com/getAllReviews')
        .then(response => response.json())
        .then(data => {
            setTestimonialData(data)
        })
    return (
        <section id="Testimonial">
            <div className="d-flex justify-content-between mb-5">
                <div className="ml-5 mt-4 pl-3">
                    <h5 className="text-primary">TESTIMONAL</h5>
                    <h2 className="">What Our Patient Says</h2>
                </div>
                <div>
                    <img className="w-50" src={quotePic} alt="" />
                </div>
            </div>
            {/* <div className="card-deck mx-5"> */}
                
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
                            testimonialData.map((data, index) => <SwiperSlide key={index}>
                                <Testimonial key={data.name} data={data}></Testimonial>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            {/* </div> */}
        </section>        
    );
};

export default Testimonials;
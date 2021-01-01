import React from 'react';
import aliza from '../../../images/aliza.png'
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import Testimonial from '../Testimonial/Testimonial';
import quotePic from '../../../images/quote.png'

const testimonialData = [
    {
        quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section>
            <div className="d-flex justify-content-between mb-5">
                <div className="ml-5 mt-4 pl-3">
                    <h5 className="text-primary">TESTIMONAL</h5>
                    <h2 className="">What Our Patient Says</h2>
                </div>
                <div>
                    <img className="w-50" src={quotePic} alt="" />
                </div>
            </div>
            <div class="card-deck mx-5">
                {
                    testimonialData.map(data => <Testimonial key={data.name} data={data}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
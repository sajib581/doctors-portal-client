import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.data
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{quote}</p>
            </div>
            <div className="card-footer pt-4 d-flex ">
                <div>
                    <img className="h-75" src={img} alt="" />
                </div>
                <div className="d-flex align-items-center">
                    <div>
                    <h6>{name}</h6>
                    <p>{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
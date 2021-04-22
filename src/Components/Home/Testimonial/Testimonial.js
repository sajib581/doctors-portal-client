import React from 'react';

const Testimonial = (props) => {
    const { review, name, location, image } = props.data
    return (
        <div className="card">
            <div style={{minHeight: "110px"}} className="card-body">
                <p className="card-text">{review}</p>
            </div>
            <div className="card-footer pt-4 d-flex ">
                <div>
                    <img style={{borderRadius : "50%"}} className="h-75" src={image} alt="" />
                </div>
                <div className="d-flex align-items-center">
                    <div>
                    <h6>{name}</h6>
                    <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
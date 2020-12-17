import React from 'react';

const SErviceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{width:"50px"}} src={service.img} alt=""/>
            <h5 className="my-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, consectetur!</p>
        </div>
    );
};

export default SErviceDetails;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({name, email, img, index}) => {
    return ( 
        <div className="text-white text-center">
            <img style={{height: '150px', borderRadius: "50%"}} className="img-fluid mb-3" src={img} alt=""/>
            <h4>{index+1}. {name}</h4>
            <h6><FontAwesomeIcon className="text-primary" icon={faEnvelope}/> <span className="ml-2">{email}</span></h6>
        </div>
    );
};

export default Doctor;
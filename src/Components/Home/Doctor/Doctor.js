import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({name, email, img}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '150px'}} className="img-fluid mb-3" src={img} alt=""/>
            <h4>{name}</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faEnvelope}/> {email}</p>
        </div>
    );
};

export default Doctor;
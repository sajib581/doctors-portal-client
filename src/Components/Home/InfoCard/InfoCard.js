import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Map from '../BusinessInfo/Map';
import './infoCard.css';

const InfoCard = ({info}) => {
    const handeler = ()=>{
        console.log("Hitted");
        return <Map />
    }
    return (
        <div onClick={handeler} className="col-md-4 info-card text-white">
            <div className={`d-flex info-container justify-content-center info-${info.background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div> 
        </div>
    );
};

export default InfoCard;
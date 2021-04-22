import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMapMarker, faClock, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hour',
        description : 'we are open 7 days',
        icon: faClock,
        background : 'primary'
    },
    {
        title: 'Visit Our Location',
        description : 'Narayanganj 10003 Bangladesh',
        icon: faMapMarker ,
        background : 'dark'
    },
    {
        title: 'Call Us Now',
        description : '+88 017111 4444',
        icon: faPhone,
        background : 'primary'
    }
    
]
const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infosData.map((info, index) => <InfoCard key={index} info={info}></InfoCard>)
            }
        </div>
        </section>
    );
};

export default BusinessInfo;
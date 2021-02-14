import React from 'react';
import fluride from '../../../images//fluride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import SErviceDetails from '../SErviceDetails/SErviceDetails';

const serviceData = [ 
    {
        name: 'Fluride Treatment',
        img:fluride
    },
    {
        name: 'cavity Filling',
        img:cavity
    },
    {
        name: 'Teth Whitening',
        img:whitening
    }
]
const Services = () => {
    return (
        <section className="services-container" id="Service">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <SErviceDetails service={service}></SErviceDetails>)
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Services;
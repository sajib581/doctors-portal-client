import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/doctors")
            .then(response => response.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors" id="Doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor
                            name={doctor.name}
                            email={doctor.email}
                            img={doctor.img}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;
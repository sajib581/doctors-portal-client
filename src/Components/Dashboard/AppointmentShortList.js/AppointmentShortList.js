import React, { useState } from 'react';
import ShowPatientPrescriptionModal from '../ShowPatientPrescriptionModal/ShowPatientPrescriptionModal';

const AppointmentShortList = ({ appointments }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [prescription, setPrescription] = useState([])
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const viewHandeler = (prescription) => {
        setPrescription(prescription)
        openModal()
    }
    return (
        <table key={appointments._id} className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Status</th>
                    <th className="text-secondary" scope="col">Prescription</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) =>

                        <tr key={index}>
                            <td>{appointment.name}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                            <td><button className={`btn btn-primary`} >{appointment.status}</button></td>
                            <td onClick={()=> viewHandeler(appointment.Prescription)}><button className="btn btn-secondary">view</button> </td>
                        </tr>
                    )
                }
            </tbody>
            <ShowPatientPrescriptionModal
                openModal={openModal}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                prescription = {prescription}
            ></ShowPatientPrescriptionModal>
        </table>
    );
};

export default AppointmentShortList;
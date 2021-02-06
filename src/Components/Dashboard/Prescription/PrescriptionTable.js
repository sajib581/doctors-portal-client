import React, { useContext, useState } from 'react';
import { AppointmentContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import PresscriptionModal from '../DashboardDataTable/PresscriptionModal';

const PrescriptionTable = () => {
    const [appointments, setAppointments] = useContext(AppointmentContext)
    const [selectedAppointment, setSelectedAppointment] = useState({})
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const viewHandeler = (id) => {
        openModal()
        const selectedData = appointments.find(ap => ap._id === id)
        setSelectedAppointment(selectedData)
    }
    function openModal() {
        setIsOpen(true);
    }
    return (
        <div style={{  backgroundColor: "#F4FDFB", minHeight: "100vh" }} >
            <section className="p-3 mt-5" style={{ backgroundColor: 'white' }}>
            <h6 className="text-brand my-3">All Patient</h6>
            <table className="table table-borderless" >
                <thead>
                    <tr className="pl-5">
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Gender</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Prescription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments && appointments.map((appointment, index) =>
                        appointment.Prescription.length>0 && <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.gender}</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.email}</td>
                                {
                                    <td ><button onClick={()=>viewHandeler(appointment._id)} className="btn text-white btn-brand">view</button></td>                                    
                                }
                            </tr>
                        )
                    }
                    <PresscriptionModal
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                        openModal={openModal}
                        modalData = {selectedAppointment}
                    ></PresscriptionModal>
                </tbody>
            </table>
        </section>
        </div>
    );
};

export default PrescriptionTable;

import React, { useContext, useState } from 'react';
import { AppointmentContext } from '../../../App';
import './DashboardDataTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import PresscriptionModal from './PresscriptionModal';

const DashboardDataTable = () => {
    const [appointments, setAppointments] = useContext(AppointmentContext)
    const [selectedAppointment, setSelectedAppointment] = useState({})
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const statusChangeHandeler = (newStatus, id) => {
        fetch("https://ancient-sea-70147.herokuapp.com/changeAppointmentStatus", {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: newStatus, id })
        })
            .then(result => {
                if (result) {
                    const index = appointments.findIndex(ap => ap.id === id)
                    appointments[index] = { ...appointments[index], status: newStatus }
                }
            })
    }
    const viewHandeler = (id) => {
        openModal()
        const selectedData = appointments.find(ap => ap._id === id)
        setSelectedAppointment(selectedData)
    }
    function openModal() {
        setIsOpen(true);
    }
    return (
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
                        <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments && appointments.map((appointment, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.gender}</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.email}</td>
                                {
                                    appointment.Prescription.length>0 ? <td ><button onClick={()=>viewHandeler(appointment._id)} className="btn text-white btn-brand">view</button></td> :
                                    <td onClick={()=>viewHandeler(appointment._id)} style={{cursor: "pointer" }} >Not Added <FontAwesomeIcon style={{ color : "green"}} icon={faPlusCircle} /></td>
                                }
                                <td>
                                    <select onChange={(e) => statusChangeHandeler(e.target.value, appointment._id)} className={appointment.status == "Rejected" ? "btn btn-danger" : appointment.status == "Approved" ? "btn btn-success" : "btn btn-info"} >
                                        <option selected={appointment.status === "Pending"} className="bg-white text-secondary">Pending</option>
                                        <option selected={appointment.status === "Approved"} className="bg-white text-secondary">Approved</option>
                                        <option selected={appointment.status === "Rejected"} className="bg-white text-secondary">Rejected</option>
                                    </select>
                                </td>

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
    );
};

export default DashboardDataTable;
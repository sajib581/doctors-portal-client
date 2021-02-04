import React, { useContext } from 'react';
import { AppointmentContext } from '../../../App';
import moment from 'moment';

const Statistics = () => {
    const [appointments, setAppointments] = useContext(AppointmentContext)

    const pendingAppointments = () => {
        let pendingAppointment = 0;
        appointments.forEach(element => {
            if (element.status === "Pending")
                pendingAppointment += 1
        });
        return pendingAppointment
    }

    const formatedDate = () => {
        const date = new Date()
        const m = moment(date, moment.ISO_8601)
        const parsingDate = m.format("L")
        return parsingDate;
    }

    const todayAppointment = appointments.reduce((todayApp, appointment) => {
        if (appointment.date === formatedDate()) {
            todayApp += 1;
        }
        return todayApp;
    }, 0)

    const totalPatient = () => {
        const uniquePatient = new Map()
        appointments.forEach(item => {
            if (!uniquePatient.has(item.phone)) {
                uniquePatient.set(item.phone, { ...item })
            }
        })
        return uniquePatient.size
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-danger"}>
                        <h1 className="w-25 mr-2">{pendingAppointments()}</h1>
                        <h6>Pending Appointments</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center rounded p-3 mb-2 text-white bg-primary">
                        <h1 className="w-25 mr-2">{todayAppointment}</h1>
                        <h6>Today’s Appointments</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center rounded p-3 mb-2 text-white bg-success">
                        <h1 className="w-25 mr-2">{appointments.length}</h1>
                        <h6>Total Appointments</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center rounded p-3 mb-2 text-white bg-warning">
                        <h1 className="w-25 mr-2">{totalPatient()}</h1>
                        <h6>Total Patients</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
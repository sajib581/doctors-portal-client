import React from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import Sidebar from '../Sidebar/Sidebar';
import PrescriptionTable from './PrescriptionTable';

const Prescription = () => {
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: "100vh" }}>
                <h5 className="">All Viewed Patient</h5>                
                <PrescriptionTable></PrescriptionTable>
            </div>
        </div>
    );
};

export default Prescription;
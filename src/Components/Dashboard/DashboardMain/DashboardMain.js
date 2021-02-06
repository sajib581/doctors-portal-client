import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import DashboardDataTable from '../DashboardDataTable/DashboardDataTable';

const DashboardMain = () => {    
    
    return (
        <section>
            <div style={{  backgroundColor: "#F4FDFB", minHeight: "100vh" }}>
                <DashboardDataTable ></DashboardDataTable>
            </div>
        </section>
    );
};

export default DashboardMain;
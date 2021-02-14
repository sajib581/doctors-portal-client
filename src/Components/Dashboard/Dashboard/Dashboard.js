import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Statistics from '../Statistics/Statistics';
import DashboardMain from '../DashboardMain/DashboardMain';
import { UserContext } from '../../../App';

const Dashboard = () => {
    
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: "100vh" }}>
                <h5 className="mb-4">Dashboard</h5>
                <Statistics></Statistics>
                <DashboardMain></DashboardMain>
            </div>
        </div>
    );
};

export default Dashboard;


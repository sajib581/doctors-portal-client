import React  from 'react';
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
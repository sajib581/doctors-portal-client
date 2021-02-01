import React from 'react';

const Statistics = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-danger"}>
                        <h1 className="w-25 mr-2">52</h1>
                        <h6>Pending Appointments</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center rounded p-3 mb-2 text-white bg-primary">
                        <h1 className="w-25 mr-2">52</h1>
                        <h6>Pending Appointments</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center rounded p-3 mb-2 text-white bg-success">
                        <h1 className="w-25 mr-2">52</h1>
                        <h6>Pending Appointments</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center rounded p-3 mb-2 text-white bg-warning">
                        <h1 className="w-25 mr-2">52</h1>
                        <h6>Pending Appointments</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
import React from 'react';
import Modal from 'react-modal';

const Ambulance = ({ modalIsOpen, closeModal }) => {
    
    const ambulanceList = [
        {
            h_name : "300 bed khanpur Hospital",
            phone: "+88 0286982525",
            time : "20 "
        },
        {
            h_name : "Victoria General Hospital",
            phone: "+88 0023693258",
            time : "30"
        },
        {
            h_name : "Prime Asia",
            phone: "+88 018263532354",
            time : "15"
        },
        {
            h_name : "Polplar General Hospital",
            phone: "+88 01488636656",
            time : "40"
        },
        {
            h_name : "Mediplus General Hospital",
            phone: "+88 0148866565565",
            time : "30"
        },
        {
            h_name : "Labaid General Hospital",
            phone: "+88 01485636656",
            time : "20"
        },
        {
            h_name : "Narayanganj General Hospital",
            phone: "+88 01485636656",
            time : "40"
        },
        {
            h_name : "Modern General Hospital",
            phone: "++88 01485636656",
            time : "50"
        },
        {
            h_name : "Siddhirganj General Hospital",
            phone: "+88 01485636656",
            time : "40"
        },
        {
            h_name : "Purbachol General Hospital",
            phone: "+88 0175423325454",
            time : "90"
        },
        {
            h_name : "Prime Clinic",
            phone: "+88 018263532354",
            time : "80"
        },{
            h_name : "Private",
            phone: "+88 0182635323",
            time : "30"
        }

    ]
    const customStyles = {
        overlay: {
            background: "rgba(130,125,125,0.75)"
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "50%",
            height: "60%"
        }
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h5 className="mb-4 text-center">Ambulance List of Narayanganj</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Hospital/Clinic/Service</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Arival Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ambulanceList.map((item, index) => <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.h_name}</td>
                                <td>{item.phone}</td>
                                <td>{item.time} Minutes</td>
                                
                            </tr> )
                        }
                    </tbody>
                </table>
            </Modal>
        </div>
    );
};

export default Ambulance;
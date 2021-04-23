import React from 'react';

import Modal from 'react-modal';

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
        minHeight: "300px",
        minWidth: "600px",
    }
};
Modal.setAppElement('#root')
const ShowPatientPrescriptionModal = ({ openModal, closeModal, modalIsOpen, prescription }) => {
console.log(prescription);
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h5 className="text-center mb-3"> Your all prescription list </h5>
                <table class="table">
                    <thead >
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Medicin</th>
                            <th scope="col">Iteretion</th>
                            <th scope="col">day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prescription.map((item, index) => <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.medicin}</td>
                                <td>{item.iteretion}</td>
                                <td>{item.day}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </Modal>
        </div>
    );
};

export default ShowPatientPrescriptionModal;
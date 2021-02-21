import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        background: "rgba(130,125,125,0.75)"
    },
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "50%"
    }
};

Modal.setAppElement('#root')

const ProblemViewModal = ({ modalIsOpen, setIsOpen, modalData }) => {
    const {name, age, gender, problems} = modalData
    function closeModal() {
        setIsOpen(false);
    }
             
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <div className="d-flex justify-content-between " >
                        <h5 className="text-brand">Name: {name}</h5>
                        <h5 className="text-brand">Age: {age}</h5>
                        <h5 className="text-brand">Gender: {gender}</h5>
                    </div>
                    <h2 className="text-center my-4 text-danger">Problem</h2>
                    <h5 className="ml-4 pb-5 ">{problems} </h5>
                </div>
            </Modal>
        </div>
    );
};

export default ProblemViewModal;
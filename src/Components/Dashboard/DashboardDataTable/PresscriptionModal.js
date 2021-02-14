import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

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

Modal.setAppElement('#root')

const PresscriptionModal = ({ modalIsOpen, setIsOpen, modalData }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { name, gender, age, _id, Prescription } = modalData 

    function closeModal() {
        setIsOpen(false);
        errors.medicin = ""
        errors.day = ""
    }

    const submitHandeler = (data,e) => {
        Prescription.push(data)
        fetch("http://localhost:5000/addPrescription", {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: Prescription, id: _id })
        })
            .then(res => res.json())
            .then(data => {
                // document.getElementById("medicin").value=""
                // document.getElementById("day").value="";
                e.target.reset();
            })
            .catch(e=> alert("Error Occured"))
    }   


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="px-5 py-3">
                    <div className="d-flex justify-content-between">
                        <h6 className="text-brand">{name}</h6>
                        <h6>Gender : {gender}</h6>
                        <h6>Age : {age}</h6>
                    </div>

                    {errors.medicin && <span className="text-danger" >This field is required <br /></span>}
                    {errors.iteretion && <span className="text-danger" >This field is required <br /></span>}
                    {errors.medicin && <span className="text-danger" >Days must not empty</span>}

                    <form onSubmit={handleSubmit(submitHandeler)} className="form-group d-flex mt-3 row" >
                        <input ref={register({ required: true })} name="medicin" placeholder="Medicine Name" id="medicin" className="form-control col-6 rounded-0"  />

                        <select name="iteretion" ref={register({ required: true })} className="form-control col-3 rounded-0" >
                            <option>1-1-1</option>
                            <option>1-1-0</option>
                            <option>1-0-1</option>
                            <option>0-1-1</option>
                            <option>0-0-1</option>
                            <option>1-0-0</option>
                            <option>0-0-1</option>
                        </select>

                        <input ref={register({ required: true })} placeholder="Day" type="number"id="day" name="day" className="form-control col-2 rounded-0"  />
                        <button style={{ height: "38px" }} type="submit" className="btn-brand col-1 text-white"><FontAwesomeIcon style={{ height: '100%' }} icon={faPlus} /></button>
                    </form>
                    {/* Table */}
                    <div>
                        <table className="table table-borderless">
                            <tbody>
                                {
                                    Prescription && Prescription.map((item, index) =>
                                        <tr>
                                            <th >{index + 1}</th>
                                            <td>{item.medicin}</td>
                                            <td>{item.iteretion}</td>
                                            <td>{item.day}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PresscriptionModal;
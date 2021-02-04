import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import moment from 'moment';

const AppointForm = ({ modalIsOpen, openModal, closeModal, appointmentTo, date }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');

  var subtitle;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    
    const m = moment(date, moment.ISO_8601)
    const parsingDate = m.format("L")

    data.service = appointmentTo;
    data.date = parsingDate
    data.created = new Date()
    data.status = "Pending"

    console.log(parsingDate);

    fetch('http://localhost:5000/addAppointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          closeModal()
          alert('Appointment Created Successfully');
        }
      })
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex">
          <h2 className="text-center text-brand" >{appointmentTo}</h2>
          <h4 style={{ cursor: "pointer" }} className="ml-auto" onClick={closeModal}>x</h4>
        </div>

        <p className="text-secondary mb-4"><small>ON {date.toDateString()}</small></p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
            {errors.phone && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
            {errors.email && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group row">
            <div className="col-4">
              <select className="form-control" name="gender" ref={register({ required: true })} >
                <option disabled={true} value="Not set">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <span className="text-danger">This field is required</span>}

            </div>
            <div className="col-4">
              <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
              {errors.age && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4">
              <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
              {errors.weight && <span className="text-danger">This field is required</span>}
            </div>
          </div>

          <div className="text-right">
            <input className="btn btn-brand" type="submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointForm;
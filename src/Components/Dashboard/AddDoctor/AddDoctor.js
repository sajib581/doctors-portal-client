import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handelBlur = (e) => {
        const newUserInfo = { ...info }
        newUserInfo[e.target.name] = e.target.value
        setInfo(newUserInfo)
    }

    const fileChangeHandeller = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const submitHandeler = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        
        fetch('https://ancient-sea-70147.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                e.target.reset();
                if(data){
                    e.target.reset();
                    alert("Doctor added Sucessfully")
                }
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault()
    }
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: "100vh" }}>
                <h5 className="mb-4">Add A Doctor</h5>
                <form onSubmit={submitHandeler} >
                    <div className="form-group">
                        <label >Email address</label>
                        <input onBlur={handelBlur} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input onBlur={handelBlur} type="text" name="name" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label >Example file input</label>
                        <input type="file" onChange={fileChangeHandeller} style={{ borderBottom: 'none' }} className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
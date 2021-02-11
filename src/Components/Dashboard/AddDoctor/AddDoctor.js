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
        
        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
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
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handelBlur} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input onBlur={handelBlur} type="text" name="name" class="form-control" id="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" onChange={fileChangeHandeller} style={{ borderBottom: 'none' }} class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
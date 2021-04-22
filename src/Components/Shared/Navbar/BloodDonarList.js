import React from 'react';
import Modal from 'react-modal';

const BloodDonarList = ({ modalIsOpen, closeModal }) => {
    const donerList = [
        {
            name: "Rasel",
            group: "AB-",
            location: "Chasara",
            age: "22",
            _id: "1"
        },
        {
            name: "Rajib",
            group: "B-",
            location: "Kalir BAzar",
            age: "45",
            _id: "2"
        },
        {
            name: "Samim",
            group: "A+",
            location: "Kalir BAzar",
            age: "44",
            _id: "3"
        },
        {
            name: "Jibon",
            group: "AB-",
            location: "Chasara",
            age: "35",
            _id: "4"
        },
        {
            name: "Akash",
            group: "AB-",
            location: "Jalkuri",
            age: "23",
            _id: "5"
        },
        {
            name: "Malek",
            group: "B-",
            location: "jalkuri",
            age: "41",
            _id: "6"
        },
        {
            name: "Srabon",
            group: "B+",
            location: "Nitaiganj",
            age: "32",
            _id: "7"
        },
        {
            name: "Nisad",
            group: "AB+",
            location: "Majdair",
            age: "25",
            _id: "8"
        },
        {
            name: "Kazi Maruf",
            group: "AB+",
            location: "Bondor",
            age: "25",
            _id: "9"
        },
        {
            name: "Tomal",
            group: "A-",
            location: "Tolla",
            age: "18",
            _id: "10"
        },
        {
            name: "Gisan",
            group: "A-",
            location: "Chasara",
            age: "45",
            _id: "11"
        },
        {
            name: "Recent",
            group: "A+",
            location: "Dewvog",
            age: "20",
            _id: "12"
        },
        
    ];
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

                <h5 className="mb-4 text-center">Blood Doner List Of Narayanganj</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Location</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donerList.map((item, index) => <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.group}</td>
                                <td>{item.age}</td>
                                <td>{item.location} </td>
                            </tr> )
                        }
                    </tbody>
                </table>
            </Modal>
        </div>
    );
};

export default BloodDonarList;
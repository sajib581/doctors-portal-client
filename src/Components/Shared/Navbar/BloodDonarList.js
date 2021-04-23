import React from 'react';
import Modal from 'react-modal';

const BloodDonarList = ({ modalIsOpen, closeModal }) => {
    const donerList = [
        {
            name: "Rasel",
            group: "AB-",
            location: "Chasara",
            phone: "+88 01485636656",
            _id: "1"
        },
        {
            name: "Rajib",
            group: "B-",
            location: "Kalir BAzar",
            phone: "+88 0156966656",
            _id: "2"
        },
        {
            name: "Samim",
            group: "A+",
            location: "Kalir BAzar",
            phone: "+88 014856655656",
            _id: "3"
        },
        {
            name: "Jibon",
            group: "AB-",
            location: "Chasara",
            phone: "+88 0178011225",
            _id: "4"
        },
        {
            name: "Akash",
            group: "AB-",
            location: "Jalkuri",
            phone: "+88 01788836656",
            _id: "5"
        },
        {
            name: "Malek",
            group: "B-",
            location: "jalkuri",
            phone: "+88 0178011225",
            _id: "6"
        },
        {
            name: "Srabon",
            group: "B+",
            location: "Nitaiganj",
            phone: "+88 01485111223",
            _id: "7"
        },
        {
            name: "Nisad",
            group: "AB+",
            location: "Majdair",
            phone: "+88 01485638888",
            _id: "8"
        },
        {
            name: "Kazi Maruf",
            group: "AB+",
            location: "Bondor",
            phone: "+88 0188888226",
            _id: "9"
        },
        {
            name: "Tomal",
            group: "A-",
            location: "Tolla",
            phone: "+88 0178011225",
            _id: "10"
        },
        {
            name: "Gisan",
            group: "A-",
            location: "Chasara",
            phone: "+88 0178011225",
            _id: "11"
        },
        {
            name: "Recent",
            group: "A+",
            location: "Dewvog",
            phone: "+88 0178011225",
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
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donerList.map((item, index) => <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.group}</td>
                                <td>{item.location}</td>
                                <td>{item.phone} </td>
                            </tr> )
                        }
                    </tbody>
                </table>
            </Modal>
        </div>
    );
};

export default BloodDonarList;
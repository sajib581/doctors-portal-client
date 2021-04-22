import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        fetch('https://ancient-sea-70147.herokuapp.com/sendAnEmail',{
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                e.target.reset();
                alert('We have received your message successfully')
            }
            else{
                e.target.reset();
                alert("Submission failed")
            }
        })
        // Email can also send via email.js from client
        // emailjs.sendForm('service_id', 'template id', e.target, 'user_NGp1cmTccuY6C1xHRvO7J')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        
        e.preventDefault();
    }


    return (
        <section className="contact" id="Contact">
            <h5 className="text-center text-primary mt-5 pt-5 text-uppercase">Contact us</h5>
            <h2 className="text-center text-white">Always Connect With US</h2>
            <div className="col-md-9 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <div className="form-group mx-auto w-50">
                        <input type="email" name="email" className="form-control" ref={register({ required: true })} id="exampleFormControlInput1" placeholder="email" />
                    </div>
                    <div className="form-group mx-auto w-50">
                        <input type="text" name="subject" className="form-control" ref={register({ required: true })} placeholder="Subject" />
                    </div>
                    <div className="form-group mx-auto w-50">
                        <textarea placeholder="text-message" name="message" className="form-control" ref={register({ required: true })} id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div className="form-group pb-5 mx-auto text-center">
                        <input type="submit" className="btn btn-primary mx-auto" value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
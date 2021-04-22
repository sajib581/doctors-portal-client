import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";

const Feedback = () => {
    const history = useHistory();

    const submitHandeller = (data, e) => {
        if (!localStorage.getItem('response')) {
            history.push('/login')
        }
        else {
            data.image = JSON.parse(localStorage.getItem('response')).photo
            fetch('https://ancient-sea-70147.herokuapp.com/addReview',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data){
                    alert('Your review has been added successfully')
                }
            })
            e.target.reset()
        }
    }
    const { register, handleSubmit,  errors } = useForm();
    
    return (
        <section className="mt-5 py-5" style={{ backgroundColor: '#FBD062' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Review us,<br /> professionally.</h2>
                        <p>Reviews should be a focal point in healthcare marketing strategy. You must be able to give feedback what doctors serve when you are an appointment. It might be help others to encourage our service or others.  <br />So we are looking forward for your fedback in general.</p>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={handleSubmit(submitHandeller)}>
                            <div className="form-group">
                                <input name="name" type="text" className="form-control" ref={register({ required: true })} placeholder="Your name / company’s name" />
                                {errors.name && <span className="text-danger bold">Name is must required</span>}
                            </div>                            
                            <div className="form-group">
                                <input type="text" name="location" className="form-control" ref={register({ required: true })} placeholder="Location" />
                                {errors.location && <span className="text-danger bold">Location is must required</span>}
                            </div>
                            <div className="form-group">
                                <textarea  name="review" className="form-control" ref={register({ required: true })} id="" cols="30" rows="5" placeholder="Your message"></textarea>
                                {errors.review && <span className="text-danger bold">Review field is must required</span>}
                            </div>
                            <div className="form-group">
                                <input className="btn btn-dark px-5" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
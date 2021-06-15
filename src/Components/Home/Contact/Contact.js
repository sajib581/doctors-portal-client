import { ValidationError } from '@formspree/react';
import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const [state, handleSubmit] = useForm("xpzkdnez");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

   


    return (
        <section className="contact" id="Contact">
            <h5 className="text-center text-primary mt-5 pt-5 text-uppercase">Contact us</h5>
            <h2 className="text-center text-white">Always Connect With US</h2>
            <div className="col-md-9 mx-auto">
                {/* Start */}
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="form-group mx-auto w-50">
                        <input type="email" id="email" name="Email" className="form-control" placeholder="email" />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-group mx-auto w-50">
                        <input type="text" id="subject" name="Subject" className="form-control" placeholder="Subject" />
                        <ValidationError 
                                prefix="Subject" 
                                field="subject"
                                errors={state.errors}
                            />
                    </div>
                    <div className="form-group mx-auto w-50">
                        <textarea placeholder="text-message" id="message" name="Message" className="form-control"  rows="5"></textarea>
                        <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                    </div>
                    <div className="form-group pb-5 mx-auto text-center">
                        <input type="submit" className="btn btn-primary mx-auto" disabled={state.submitting} value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact ">             
                <h5 className="text-center text-primary mt-5 pt-5 text-uppercase">Contact us</h5>
                <h2 className="text-center text-white">Always Connect With US</h2>
                <div className="col-md-9 mx-auto">
                    <form className="mt-5">
                        <div class="form-group mx-auto w-50">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" />
                        </div>
                        <div class="form-group mx-auto w-50">
                        <input type="text" class="form-control" placeholder="Subject" />
                        </div>
                        <div class="form-group mx-auto w-50">
                            <textarea placeholder="text-message"class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div className="form-group pb-5 mx-auto text-center">
                            <button className="btn btn-primary mx-auto">Submit</button>
                        </div>
                    </form>
                </div>            
        </section>
    );
};

export default Contact;
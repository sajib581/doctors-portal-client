import React from 'react';
import { Link } from 'react-router-dom';
import maskGroup from '../../../images/Mask Group 3.png'

const FeaturedService = () => {
    return (
        <section className="mb-5 pb-3">
            <div className="row my-5 py-3 mx-5 px-5 mb-5 pb-5">
                <div className="col-md-5">
                    <img style={{ height: "500px" }} className="img-fluid" src={maskGroup} alt="" />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <div>
                        <h1>Exceptional Dental <br />Care, on Your Terms</h1>
                        <p className="text-secondary my-4 pr-5">Our Doctor	has	thirty	years’	experience	in	ophthalmic	surgery,	with	special	interest	in
                        cataract	surgery,	corneal	transplantation,	and	laser	refractive	procedures.	He	is	a
                        founding	member	of	Precision	LASIK	Group,	Chief	of	Ophthalmology	at	The	Hospital
of	Central	Connecticut,	and	co-medical	director	of	the	Connecticut	eye	bank. </p>
                        <Link to="/appointment" className="btn btn-primary"> <span>Learn More</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
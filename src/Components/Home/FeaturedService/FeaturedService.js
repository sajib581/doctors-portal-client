import React from 'react';
import maskGroup from '../../../images/Mask Group 3.png'

const FeaturedService = () => {
    return (
        <section className="mb-5 pb-3">
            <div className="row my-5 py-3 mx-5 px-5 mb-5 pb-5">
                <div className="col-md-5">
                    <img style={{height:"500px"}} className="img-fluid" src={maskGroup} alt=""/>
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <div>
                    <h1>Exceptional Dental <br/>Care, on Your Terms</h1>
                    <p className="text-secondary my-4 pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus magni laudantium velit tempora. Facere quasi distinctio dolorem maiores voluptate saepe corrupti in delectus consequatur eum eligendi, fugit ducimus. Quidem tenetur quis, nisi pariatur animi ea. In, cum perferendis commodi expedita tenetur, possimus esse molestiae nihil at similique voluptatem necessitatibus.</p>
                    <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
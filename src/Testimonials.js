import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="https://i.imgur.com/evqtRLz.jpg" alt="" />
                        <h5>Margaret E.</h5>
                        <p className="font-weight-light mb-0">"I learned how to cook masala dosa and made some new friends in the process!"</p>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="https://i.imgur.com/RMmQNK1.jpg" alt="" />
                        <h5>Fred S.</h5>
                        <p className="font-weight-light mb-0">"This was such a fun experience and I would do it again. Marie was a fantastic host and an ever better chef."</p>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="https://i.imgur.com/DYOqeff.jpg" alt="" />
                        <h5>Sarah W.</h5>
                        <p className="font-weight-light mb-0">"Kitchin has become my new go-to for recipes and all things food!"</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Testimonials;
import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

const Testimonials = () => {
    return (
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="https://images.unsplash.com/photo-1574621099980-223fdbbfed01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="" />
                        <h5>Margaret E.</h5>
                        <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="https://images.unsplash.com/photo-1574525868504-cb8801cde77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80" alt="" />
                        <h5>Fred S.</h5>
                        <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="https://images.unsplash.com/photo-1571335272625-c06041f68736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="" />
                        <h5>Sarah W.</h5>
                        <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Testimonials;
import React from 'react';

 const About = () => {
        return (
            <div className="about">
            <section className="showcase">
                <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>About</h2>
                    <p className="lead mb-0">Kitchin envisions a world made better by cooking and cooking made richer by connection. Cooks share their lives with the people they encounter, fostering cultural exchange and mutual respect.</p>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1569435998017-abb5d562dedf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                    <h2>Our values</h2>
                    <p className="lead mb-0">Kitchin is a global community of foodies who share their personal recipes , their world, and their journey. Kitchin connects foodies with a global network of people willing to share in profound and meaningful ways, making a truly social experience by cooking.</p>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>Our story</h2>
                    <p className="lead mb-0">Kitchin began in 2019 as a small passion project by founders Akif and Fanny. The idea sprouted in Dubai, a crossroads of cultures and cuisines. We believe that food lies at the heart of social interactions, whether it is with old or future friends.</p>
                    </div>
                </div>
                </div>
            </section>
            </div>
        )
    }
    
    export default About;
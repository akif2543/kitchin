import React, { useContext } from 'react';
import AppContext from './AppContext';



 const About = () => {
        return (
            <section class="showcase">
                <div class="container-fluid p-0">
                <div class="row no-gutters">
    
                    <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)"}}></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>About</h2>
                    <p class="lead mb-0">We envision a world made better by cooking and cooking made richer by connection. Cookers share their lives with the people they encounter, fostering cultural exchange and mutual respect.</p>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-lg-6 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1569435998017-abb5d562dedf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}></div>
                    <div class="col-lg-6 my-auto showcase-text">
                    <h2>Our values</h2>
                    <p class="lead mb-0">Kitchin is a global community of foodies in Dubai who share their personal receipts , their world, their journey. Kitchin connects foodies with a global network of people willing to share in profound and meaningful ways, making a truly social experience by cooking.</p>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>Our story</h2>
                    <p class="lead mb-0">Kitchin began in 2019 as a small passion project by founders Akif and Fanny. The idea grow in Dubai, the largest multicultural city. We believe that people would want to share their cultures and passion for cooking with friends they haven't met yet.</p>
                    </div>
                </div>
                </div>
            </section>
        )
    }
    
    export default About;





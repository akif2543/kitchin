import React from 'react';

const Showcase = () => {
    return (
        <section class="showcase">
            <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')"}}></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Cooking as a social experience</h2>
                <p class="lead mb-0">Arrange 1-on-1 or group events to cook and share food with old friends and new.</p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-lg-6 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1514944617518-12c7891ec602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}></div>
                <div class="col-lg-6 my-auto showcase-text">
                <h2>The world at your fingertips</h2>
                <p class="lead mb-0">Explore and learn how to recreate cuisines from around the world. Take the mystery out of French cooking and learn how to make a few classic dishes.</p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)"}}></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Show off your skills</h2>
                <p class="lead mb-0">Share pictures, recipes, helpful tips and tricks, and more!</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Showcase;
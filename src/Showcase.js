import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

const Showcase = () => {
    return (
        <section class="showcase">
            <div class="container-fluid p-0">
            <div class="row no-gutters">

                <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1473106235427-b7202ef5453d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)"}}></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Asian cuisine</h2>
                <p class="lead mb-0">Explore various Asian cuisines and learn how to recreate authentic recipes at home.</p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-lg-6 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1514944617518-12c7891ec602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}></div>
                <div class="col-lg-6 my-auto showcase-text">
                <h2>French cuisine</h2>
                <p class="lead mb-0">Are you new to French cuisine? Does the language intimidate you and make the recipes seem out of reach? Let's take the mystery out of French cooking and learn how to make a few classic dishes.</p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://images.unsplash.com/photo-1542444256-164bd32f11fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=908&q=80)"}}></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Lebanese cuisine</h2>
                <p class="lead mb-0">The Lebanese people have gathered this culinary knowledge and used it in their cuisine. Because Lebanon is a melting pot, the countries that surround it have similar cuisines.</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Showcase;
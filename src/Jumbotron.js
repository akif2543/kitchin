import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

const Jumbotron = ({ header, lead, info, buttonLabel }) => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const openRegistration = () => {
        setGlobalState({ ...globalState, openRegistration: true });
    };

    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">{header}</h1>
            <p className="lead">{lead}</p>
            {/* <hr className="my-4" /> */}
            <p>{info}</p>
            <button className="btn btn-primary btn-lg" onClick={openRegistration} href="#signup" role="button">{buttonLabel}</button>
        </div>
    )
};

export default Jumbotron;
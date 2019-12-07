import React, { useContext } from 'react';
import AppContext from './AppContext';

const About = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    return (
        <div className="page">
            <h1> We envision a world made better by cooking and cooking made richer by connection. Cookers share their lives with the people they encounter, fostering cultural exchange and mutual respect.</h1>
            <h1> Kitchin is a global community of foodies in Dubai who share their personal receipts , their world, their journey. Kitchin connects foodies with a global network of people willing to share in profound and meaningful ways, making a truly social experience by cooking.</h1>
            <h1>Kitchin began in 2019 as a small passion project by founders Akif and Fanny. The idea grow in Dubai, the largest multicultural city. We believe that people would want to share their cultures and passion for cooking with friends they haven't met yet.</h1>
            <p>{globalState.userid}</p>
        </div>
    )
}

export default About;


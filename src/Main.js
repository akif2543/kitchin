import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import App from './App';
import Home from './Home';
import AppContext from './AppContext';

const links = [
    {
      'label': 'Home',
      'path': './Home'
    }, {
      'label': 'About',
      'path': './About'
    },
]

const LayoutRoute = ({path, component, exact}) => {
    return(
        <div>
        <NavBar links={links}/>
        <Route path={path} exact={exact} component={component} />
        <Footer />
        </div>
    )
};

const Main = () => {
    
    const [globalState, setGlobalState] = useState(
        {
          user: {
            name: sessionStorage.getItem('username') ? sessionStorage.getItem('username') : null,
            id: sessionStorage.getItem('userid') ? sessionStorage.getItem('userid') : null,
            profile: {},
        },
          signedIn: sessionStorage.getItem('jwt') ? true : false,
          profileLoaded: false,
          postsLoaded: false,
        }
    )

    return (
        <AppContext.Provider value ={[globalState, setGlobalState]}>
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact component={App}></LayoutRoute>
                <LayoutRoute path="/home" exact component={Home}></LayoutRoute>
            </Switch>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Main;

import React, { useState, useContext, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import App from './App';
import Home from './Home';
import About from './About';
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
        <Footer links={links}/>
        </div>
    )
};

const PrivateRoute = ({ component: Component, ...restOfProps }) => {

    const [globalState] = useContext(AppContext);

    return (
        <Route {...restOfProps} render={
            (props)=> globalState.signedIn ? <LayoutRoute component={<Component {...props}/>} /> : <Redirect to={'/'} />
        } />
    )
}

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
                <LayoutRoute path="/" exact component={App} />
                <LayoutRoute path="/home" exact component={Home} />
                <LayoutRoute path="/about" exact component={About} />
            </Switch>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Main;
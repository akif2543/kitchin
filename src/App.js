import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import RegistrationForm from "./RegistrationForm";
import Showcase from "./Showcase";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import DatePicker from "./DateTimePicker";
import AppContext from './AppContext';
import './App.css';

function App() {
  const [globalState, setGlobalState] = useState(
    {
      user: {},
      signedIn: sessionStorage.getItem('jwt') ? true : false,
      openRegistration: false,
    }
  )
  return (
    <AppContext.Provider value ={[globalState, setGlobalState]}>
    <div className="App">
      <NavBar />
      <Jumbotron 
      header="Header TK"
      lead="Lead TK"
      info="Text TK"
      buttonLabel="Sign Up"
      />
      {globalState.openRegistration &&
      <RegistrationForm />
      }
      <Showcase />
      <Testimonials />
      <Footer />
    </div>
    </AppContext.Provider>
  );
}

export default App;

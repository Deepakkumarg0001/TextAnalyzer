import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const location = useLocation();

   const showAlert= (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
   }

    const toggleMode = ()=>{
      if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#272152'
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextAnalyzer - Dark Mode'
        // setInterval(() => {
        // document.title = 'TextAnalyzer is Amazing'
        // }, 2000);
        // setInterval(() => {
        // document.title = 'Install TextAnalyzer now'
        // }, 1500);
      }
       else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "success");
        document.title = 'TextAnalyzer - Light Mode'

      }
    }

useEffect(() => {
  if (location.pathname === "/") {
    document.title = mode === "dark"
      ? "TextAnalyzer - Home (Dark Mode)"
      : "TextAnalyzer - Home (Light Mode)";
  } else if (location.pathname === "/about") {
    document.title = mode === "dark"
      ? "TextAnalyzer - About (Dark Mode)"
      : "TextAnalyzer - About (Light Mode)";
  }
}, [location, mode]);





  
  return (
    <>
       

  <Navbar title="TextAnalyser" aboutText="About" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
   <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextAnalyzer - Word Counter, Character Counter" mode={mode} />}/>       
          <Route exact path="/about" element={<About mode={mode}/>} />
   </Routes>
  </div>
    </>
  );
}


function AppWrapper() {
  return (
    <Router exact path="/TextAnalyzer">
      <App />
    </Router>
  );
}

export default AppWrapper;


import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export function App() {

  const [mode, setMode]= useState('light');

  const togglemode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      console.log(mode);
      showalert("enabled light mode", "success")
      document.title = 'TextUtils-light MODE';
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042547';
      console.log(mode);
      showalert("enabled dark mode", "success")
      document.title = 'TextUtils-dark MODE';
    }
  }

  const [alert, setalert] = useState(null)

  const showalert=(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },2000
    )
  }

  return (
    <>
    
    <Router>
    <Navbar title = 'Text utils1' ptg={"pritam the greate"} mode={mode} togglemode={togglemode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container">
      <Routes>
        <Route exact path="/" element=
        {    <Textform showalert={showalert} heading="Word Counter | Character Counter" mode={mode}></Textform>
      } 
        />
      </Routes>
      <Routes>
        <Route path="/about" element=
        {<About mode={mode}></About>} 
        />
      </Routes>
    
    </div>
    </Router>

    </>
    );
}




import React, { useState } from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode,setMode] = useState('light')

  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      // document.title='TextUtils-Dark Mode'
      // setInterval(()=>{
      //   document.title='TextUtils is working'
      // },2000)
      // setInterval(()=>{
      //   document.title='Install TextUtils now'
      // },1500)
      showAlert("Dark Mode has been Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      // document.title='TextUtils-Light Mode'
      showAlert("Light Mode has been Enabled","success")
    }
  }

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        <About/> */}
        {/* <Alert alert={alert}/> */}
        <Routes basepath="/textutils">
          <Route exact path="/textutils/about" element={<About mode={mode}/>}/>
          <Route exact path="/textutils" element={<TextForm heading="Try TextUtils - Word Counter, Chracter Counter" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

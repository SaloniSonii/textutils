import React,{useState} from 'react'
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

export default function App() {
  const[mode, setmode] = useState('light');
    const toggleMode= ()=>{
     if(mode ==='light'){
       setmode('dark');
       document.body.style.backgroundColor = '#042743';
       document.title = "TextUtils-Dark Mode";
     }
     else{
       setmode('light');
       document.body.style.backgroundColor = 'white';
       document.title = "TextUtils-Light Mode";
     }
    }
  return (
    <div>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path='/' element={<div className="container my-3">
            <TextForm heading="Enter the text to analyze below" mode={mode}/> 
          </div>}/>
          <Route exact path='/About' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}


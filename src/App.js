import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About.js";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
function App() {
  const [mystyle, setmystyle] = useState({
    color: "black",
  });
  const [alert, setalert] = useState(null);
  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mystyle.color === "black") {
      setmystyle({
        color: "white",
      });
      document.body.style.backgroundColor = "black";
      showAlert("Darkmode enabled", "success");
    } else {
      setmystyle({
        color: "black",
      });

      document.body.style.backgroundColor = "white";
      showAlert("Darkmode Disabled", "success");
    }
  };

  return (
    <>
     
      <Router>

      <Navbar
        title="TextUtils"
        mystyle={mystyle}
        aboutText="About TextUtils"
        togglemode={togglemode}
      />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={ <About/>}/>
           
       

          <Route exact path="/" element={<TextForm heading="Enter Text below to analyze" mystyle={mystyle} />}/>
            
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [state, setState] = useState(true)
  const handleToggle = () => {
       if(state === true) {
            setState(false)
       } else {
        setState(true)
       }
  }
  return (
    <div id="main">
      {state === true ? (
        <div id="welcome-div">{<h1>Welcome to Newton School!!</h1>}</div>) : (
        <div id="about-div">{<h1>Newton School is a neo-university providing highly
           immersive tech learning to millions of students, to tap into new-age 
           tech opportunities.</h1>}</div>
        )}
      <button id="toggle" onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default App;

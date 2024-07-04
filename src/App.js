import React from "react";
import Navbar from "./Components/Navbar";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div>
      <Navbar title="Calculator" home="Home" about="About" services="Services" skill="Skill" contact="Contact"/>
      <Calculator/>
    </div>
  );
}

export default App;

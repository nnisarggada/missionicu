import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Taluka from "./components/Taluka";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Taluka />
      <Partners />
    </div>
  );
}

export default App;

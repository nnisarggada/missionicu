import React from "react";
import Home from "./components/Home";
import Impact from "./components/Impact";
import Navbar from "./components/Navbar";
import Nominate from "./components/Nominate";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Nominate />
      <Partners />
      <Impact />
    </div>
  );
}

export default App;

import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="h-screen bg-brand-700"></div>
    </div>
  );
}

export default App;

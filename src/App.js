import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Hospitals from "./components/Hospitals";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="hospitals" element={<Hospitals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

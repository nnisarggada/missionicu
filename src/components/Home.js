import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Nominate from "./Nominate";
import Partners from "./Partners";
import Impact from "./Impact";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Nominate />
      <Partners />
      <Impact />
    </div>
  );
}

export default Home;

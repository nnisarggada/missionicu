import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Nominate from "./Nominate";
import Partners from "./Partners";
import Impact from "./Impact";
import Alert from "./Alert";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Nominate />
      <Partners />
      <Impact />
      <Alert text="Nomination Successful" />
    </div>
  );
}

export default Home;

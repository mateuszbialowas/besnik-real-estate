import React from "react";
import "./App.css";
import Navabar from "./Navbar";
import Header from "./Header";
import ClientsSection from "./ClientsSection";
import HowItWorks from "./components/HowItWorks";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";

function App() {
  return (
    <>
      <Navabar />
      <Header />
      <ClientsSection />
      <HowItWorks />
      <Feature1/>
      {/* <Feature2/> */}
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navabar from "./Navbar";
import Header from "./Header";
import ClientsSection from "./ClientsSection";
import HowItWorks from "./components/HowItWorks";
import Feature1 from "./components/Feature1";

function App() {
  return (
    <>
      <Navabar />
      <Header />
      <ClientsSection />
      <HowItWorks />
      <Feature1/>
    </>
  );
}

export default App;

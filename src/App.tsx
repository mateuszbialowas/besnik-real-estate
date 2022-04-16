import React from "react";
import "./App.css";
import Navabar from "./Navbar";
import Header from "./Header";
import ClientsSection from "./ClientsSection";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <Navabar />
      <Header />
      <ClientsSection />
      <HowItWorks />
    </>
  );
}

export default App;

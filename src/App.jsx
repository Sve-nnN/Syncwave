import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/navbar";
import Hero from "./assets/components/hero";
import Footer from "./assets/components/footer";
import Characteristics from "./assets/components/characteristics";
import Cards from "./assets/components/cards";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </>
  );
}

export default App;

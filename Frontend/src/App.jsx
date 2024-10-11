import "./App.css";
import React from "react";
import { useContext } from "react";
import { MyContext } from "./context";
import { Toaster } from "react-hot-toast";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Toaster />
      {/* <button onClick={Connect}>connect</button> */}
      <Hero />
      <Navbar />
    </>
  );
};

export default App;

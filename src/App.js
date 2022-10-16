import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Mobile from "./components/Mobile/Mobile";
import Projects from "./components/Projects/Projects";
import Games from "./components/Games/Games";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Mobile />
      <Projects />
      <Games />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

import React, { useState } from "react";
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
  const [language, setLanguage] = useState("English");

  return (
    <>
      <Header
        setLanguage={setLanguage}
        language={language}
      />
      <Home
        language={language}
      />
      <Mobile
        language={language}
      />
      <Projects
        language={language}
      />
      <Games
        language={language}
      />
      <Contact
        language={language}
      />
      <Footer
        language={language}
      />
      <BackToTop />
    </>
  );
};

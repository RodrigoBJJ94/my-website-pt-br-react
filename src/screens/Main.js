import React, { useRef } from "react";
import SimpleBar from "simplebar-react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";
import Games from "./Games/Games";
import Contact from "./Contact/Contact";
import "simplebar-react/dist/simplebar.min.css";
import "./Styles.css";

export default function Main() {

  const screensRef = {
    home: useRef(null),
    mobile: useRef(null),
    web: useRef(null),
    games: useRef(null),
    contact: useRef(null)
  };

  const scrolltoScreen = (screen) => {
    screensRef[screen].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mainApp">
      <Header
        scrolltoScreen={scrolltoScreen}
      />
      <SimpleBar
        style={{
          height: "89vh",
          marginTop: "11vh"
        }}>
        <Home
          screensRef={screensRef}
        />
        <Mobile
          screensRef={screensRef}
        />
        <Web
          screensRef={screensRef}
        />
        <Games
          screensRef={screensRef}
        />
        <Contact
          screensRef={screensRef}
        />
      </SimpleBar>
    </div>
  );
};

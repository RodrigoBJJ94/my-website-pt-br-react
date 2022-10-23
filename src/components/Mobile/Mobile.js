import React from "react";
import MobileTitles from "./MobileTitles";
import MobileMain from "./MobileMain";
import MobileBackground from "./MobileBackground";
import "./Mobile.css";

export default function Mobile({ language }) {
  return (
    <section
      id="mobile"
      className="white-background section apps-back">
      <div className="main-content grid-one-content mobile">
        <div className="intro-text-content">
          <MobileTitles
            language={language}
          />
          <MobileMain
            language={language}
          />
        </div>
        <MobileBackground />
      </div>
    </section>
  );
};

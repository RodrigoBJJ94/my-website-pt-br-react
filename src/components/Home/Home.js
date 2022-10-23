import React from "react";
import HomeTitle from "./HomeTitle";
import HomeMain from "./HomeMain";
import HomeBackground from "./HomeBackground";
import "./Home.css";

export default function Home({ language }) {
  return (
    <section
      id="home"
      className="intro main-background section">
      <div className="main-content intro-content">
        <div className="intro-text-content">
          <HomeTitle
            language={language}
          />
          <HomeMain
            language={language}
          />
        </div>
        <HomeBackground />
      </div>
    </section>
  );
};

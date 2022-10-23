import React from "react";
import GamesTitles from "./GamesTitles";
import GamesMain from "./GamesMain";
import GamesBackground from "./GamesBackground";
import "./Games.css";

export default function Games({ language }) {
  return (
    <section
      id="games"
      className="grid-one white-background section back">
      <div className="main-content grid-one-content">
        <div className="intro-text-content">
          <GamesTitles
            language={language}
          />
          <GamesMain
            language={language}
          />
        </div>
        <GamesBackground />
      </div>
    </section>
  );
};

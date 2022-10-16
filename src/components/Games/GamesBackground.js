import React from "react";
import GamesSvg from "../../assets/img/GamesSvg.svg";

export default function GamesBackground() {
  return (
    <div className="games-background-svg">
      <img
        src={GamesSvg}
        alt=""
        className="games-background-svg"
      />
    </div>
  );
};

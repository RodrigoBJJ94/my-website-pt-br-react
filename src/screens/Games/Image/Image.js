import React from "react";
import GamesImage from "../../../images/GamesImage.svg";
import "../../../Styles.css";

export default function Image() {
  return (
    <div className="projectsImageContainer">
      <img
        src={GamesImage}
        className="projectsImage"
        alt="Games"
      />
    </div>
  );
};

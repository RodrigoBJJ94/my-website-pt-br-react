import React from "react";
import HomeImage from "../../../images/HomeImage.svg";
import "../../../Styles.css";

export default function Image() {
  return (
    <div className="projectsImageContainer">
      <img
        src={HomeImage}
        className="projectsImage"
        alt="Home"
      />
    </div>
  );
};

import React from "react";
import MobileImage from "../../../images/MobileImage.svg";
import "../../../Styles.css";

export default function Image() {
  return (
    <div className="projectsImageContainer">
      <img
        src={MobileImage}
        className="projectsImage"
        alt="Mobile"
      />
    </div>
  );
};

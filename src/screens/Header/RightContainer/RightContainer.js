import React from "react";
import Titles from "./Titles/Titles";
import Languages from "./Languages/Languages";
import "./Styles.css";

export default function RightContainer({ scrolltoScreen }) {
  return (
    <div className="headerRightContainer">
      <Titles scrolltoScreen={scrolltoScreen} />
      <Languages />
    </div>
  );
};

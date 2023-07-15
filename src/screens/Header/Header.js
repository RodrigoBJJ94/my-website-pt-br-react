import React from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import "./Styles.css";

export default function Header({ scrolltoScreen }) {
  return (
    <div className="headerMainContainer">
      <div className="headerContainer">
        <LeftContainer
          scrolltoScreen={scrolltoScreen}
        />
        <RightContainer
          scrolltoScreen={scrolltoScreen}
        />
      </div>
    </div>
  );
};

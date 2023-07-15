import React from "react";
import "./Styles.css";

export default function LeftContainer({ scrolltoScreen }) {
  return (
    <div>
      <button
        onClick={() => scrolltoScreen("home")}
        className="headerHomeButtonTitle">
        HOME
      </button>
    </div>
  );
};

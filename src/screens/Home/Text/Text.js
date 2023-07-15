import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "./Styles.css";

export default function Text() {

  const { language } = useContextAPI();

  return (
    <>
      <div className="homeTextContainer">
        <p className="homeText">
          {
            language === "us"
              ? "I'm a Web/Mobile/Desktop developer with more focus in the Frontend"
              : "Eu sou um desenvolvedor Web/Mobile/Desktop com foco no Frontend"
          }
        </p>
      </div>
      <div className="homeTextContainer">
        <p className="homeText">
          {
            language === "us"
              ? "I Work at the company Ponfac from Porto Alegre - Brazil"
              : "Eu trabalho na empresa Ponfac de Porto Alegre - Brasil"
          }
        </p>
      </div>
      <div className="homeTextContainer">
        <p className="homeText">
          {
            language === "us"
              ? "The main technologies I use are: React, React Native, Electron, JavaScript, Node, Express, SQL, HTML, CSS and Git"
              : "As principais tecnologias que eu utilizo são: React, React Native, Electron, JavaScript, Node, Express, SQL, HTML, CSS e Git"
          }
        </p>
      </div>
    </>
  );
};

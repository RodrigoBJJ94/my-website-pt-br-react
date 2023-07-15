import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "../../../Styles.css";

export default function Content() {

  const { language } = useContextAPI();

  return (
    <div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-jogo-da-velha-versus-cpu.netlify.app"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Tic Tac Toe - vs CPU"
                : "Jogo da Velha - vs CPU"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-jogo-da-velha.netlify.app"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Tic Tac Toe - 2 Playes"
                : "Jogo da Velha - 2 Jogadores"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-jogo-da-forca.netlify.app"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Hangman"
                : "Jogo da Forca"
            }
          </a>
        </p>
      </div>
    </div>
  );
};

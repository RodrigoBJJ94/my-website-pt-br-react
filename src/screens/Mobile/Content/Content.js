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
            href="https://play.google.com/store/apps/details?id=com.animeApp"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            Anime App
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.weathercitiesclima"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Cities Weather"
                : "Climas das Cidades"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.ticTacToeJogoDaVelha"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Tic Tac Toe"
                : "Jogo da Velha"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.conversormedidas"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Measure Converter"
                : "Conversor de Medidas"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.calories"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Calorie Counter"
                : "Contador de Calorias"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.calculatorCalculadoraCalculator"
            className="projectsAppText"
            style={{ color: "#0A1128" }}>
            {
              language === "us"
                ? "Calculator"
                : "Calculadora"
            }
          </a>
        </p>
      </div>
    </div>
  );
};

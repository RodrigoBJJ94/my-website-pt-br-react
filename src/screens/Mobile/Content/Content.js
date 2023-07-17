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
            className="projectsAppTextSecondary">
            Anime App
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.weathercitiesclima"
            className="projectsAppTextSecondary">
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
            className="projectsAppTextSecondary">
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
            className="projectsAppTextSecondary">
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
            className="projectsAppTextSecondary">
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
            className="projectsAppTextSecondary">
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

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
            href="https://github.com/RodrigoBJJ94/anime-app-react-native"
            className="projectsAppTextSecondary">
            Anime App
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://github.com/RodrigoBJJ94/cities-weather-react-native"
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
            href="https://github.com/RodrigoBJJ94/tic-tac-toe-jogo-da-velha-react-native"
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
            href="https://github.com/RodrigoBJJ94/measure-converter-react-native"
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
            href="https://github.com/RodrigoBJJ94/calorie-counter-react-native"
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
            href="https://github.com/RodrigoBJJ94/calculator-calculadora-react-native"
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

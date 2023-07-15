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
            href="https://rodrigobrentano-annotations-maker.netlify.app"
            className="projectsAppText">
            {
              language === "us"
                ? "Annotations Maker"
                : "Criador de Anotaçãoes"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-currency-converter.netlify.app"
            className="projectsAppText">
            {
              language === "us"
                ? "Currency Converter"
                : "Conversor de Moedas"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-pomodoro.netlify.app"
            className="projectsAppText">
            Pomodoro
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-calculator-of-bmi.netlify.app"
            className="projectsAppText">
            {
              language === "us"
                ? "BMI Calculator"
                : "Calculadora de IMC"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-text-case-converter.netlify.app"
            className="projectsAppText">
            {
              language === "us"
                ? "Text Case Converter"
                : "Conversor de Textos"
            }
          </a>
        </p>
      </div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://rodrigobrentano-lista-de-tarefas.netlify.app"
            className="projectsAppText">
            {
              language === "us"
                ? "To-do List"
                : "Lista de Tarefas"
            }
          </a>
        </p>
      </div>
    </div>
  );
};

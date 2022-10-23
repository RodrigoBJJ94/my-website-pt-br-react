import React from "react";

export default function ProjectsMain({ language }) {
  return (
    <>
      <h4><a
        href="https://rodrigobrentano-annotations-maker.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Annotations Maker" : "Criador de Anotações"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-currency-converter.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Currency Converter" : "Conversor de Moedas"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-calculator.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Calculator" : "Calculadora"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-pomodoro.netlify.app"
        target="_blank"
        rel="noreferrer">
        Pomodoro
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-calculator-of-bmi.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "BMI Calculator" : "Calculadora de IMC"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-text-case-converter.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Text Case Converter" : "Conversor de Textos"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-lista-de-tarefas.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "To-do List" : "Lista de Tarefas"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-timer.netlify.app"
        target="_blank"
        rel="noreferrer">
        Timer
      </a></h4>
    </>
  );
};

import React from "react";

export default function MobileMain({ language }) {
  return (
    <>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.animeApp"
        target="_blank"
        rel="noreferrer">
        Anime App
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.ticTacToeJogoDaVelha"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Tic Tac Toe" : "Jogo da Velha"}
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.weathercitiesclima"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Cities Weather" : "Clima das Cidades"}
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.conversormedidas"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Measure Converter" : "Conversor de Medidas"}
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.calculatorCalculadoraCalculator"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Calculator" : "Calculadora"}
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.calories"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Calorie Counter" : "Contador de Calorias"}
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.calculatorOfImc"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "BMI Calculator" : "Calculadora de IMC"}
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.gasolinaOuEtanol"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Gasoline or Ethanol" : "Gasolina ou Etanol"}
      </a></h4>
      <h4><a
        href="https://play.google.com/store/apps/details?id=com.HeadsOrTailscaracoroa"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Heads or Tails" : "Cara ou Coroa"}
      </a></h4>
    </>
  );
};

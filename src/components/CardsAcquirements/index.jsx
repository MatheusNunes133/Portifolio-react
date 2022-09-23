import React from "react";
import "../../global/styles-components/CardsAcquirements/cardsAcquirements.css";

export default function CardsAcquirements({ link, funcao }) {
  return (
    <div id="container-cards-acquirements" onClick={funcao}>
      <img src={link} alt="" />
    </div>
  );
}

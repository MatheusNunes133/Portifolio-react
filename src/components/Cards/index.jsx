import React from "react";
import "../../global/styles-components/Cards/cards.css";

export default function Cards({ image, title, desc, link }) {
  return (
    <div id="cards">
      <img src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href={link} target="_blank">
          View More
        </a>
      </div>
    </div>
  );
}

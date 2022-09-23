import React from "react";
import "../../global/styles-components/Modal/modal.css";

export default function Modal({ closeModal, content }) {
  return (
    <div id="container-modal">
      <div id="container-info">
        <h2
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </h2>
        <div id="container-img">
          <img src={content.link} alt="" />
          <p>{content.desc}</p>
        </div>
      </div>
    </div>
  );
}

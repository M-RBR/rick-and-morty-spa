import React from "react";

function Modal({ name, status, species, gender, closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

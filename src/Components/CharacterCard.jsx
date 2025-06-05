import { useState } from "react";
// import "./CharacterCard.css"; //
import Modal from "./Modal";

function CharacterCard({ image, name, status, species, gender }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={image}
            alt={name}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <button onClick={() => setOpenModal(true)}>More Info</button>
        </div>
      </div>

      {openModal && (
        <Modal
          name={name}
          status={status}
          species={species}
          gender={gender}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}

export default CharacterCard;

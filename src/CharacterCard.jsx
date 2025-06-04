import "./CharacterCard.css";

function CharacterCard({ image, name }) {
  return (
    <div className="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src={image}
            alt={name}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div class="flip-card-back">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;

function CharacterCard({ image, name }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default CharacterCard;

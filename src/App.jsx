import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.error("Failed to fetch characters:", error));
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div className="card-container">
        {characters.map((char) => (
          <CharacterCard key={char.id} image={char.image} name={char.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

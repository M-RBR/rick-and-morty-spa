import { useEffect, useState } from "react";
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
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

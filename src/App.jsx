import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      })
      .catch((error) => console.error("Failed to fetch characters:", error));
  }, []);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const results = characters.filter((char) =>
      char.name.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredCharacters(results);
  }, [searchTerm, characters]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>

      <form>
        <div>
          <input
            type="search"
            id="default-search"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </form>

      <div>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => (
            <CharacterCard
              key={char.id}
              image={char.image}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
            />
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

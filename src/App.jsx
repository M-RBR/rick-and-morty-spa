import { useEffect, useState } from "react";
import CharacterCard from "./Components/CharacterCard";
// import "./App.css"; // remove?

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
    <div className="min-h-screen bg-gray-200 text-black p-4">
      <h1 className="text-5xl font-extrabold text-center my-10 text-emerald-500 underline decoration-wavy decoration-2 tracking-wide">
        Rick and Morty Characters
      </h1>

      <form className="mb-8 flex justify-center">
        <div>
          <input
            type="search"
            id="default-search"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-lg p-2 text-xl rounded-lg border-3 border-green-500 bg-gray-800 text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 justify-items-center">
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
          <p className="text-center text-xl text-red-400 col-span-full">
            No characters found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

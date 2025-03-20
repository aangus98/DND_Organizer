import React from "react";
import { useState } from "react";

const CharacterName = () => {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="character-name">Character Name:</label>
      <input
        type="text"
        id="character-name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default CharacterName;
import React from "react";
import { useState } from "react";

const backgroundOptions = [
    "Acolyte",
    "Charlatan",
    "Criminal",
    "Entertainer",
    "Folk Hero",
    "Guild Artisan",
    "Hermit",
    "Noble",
    "Outlander",
    "Sage",
    "Sailor",
    "Soldier",
    "Urchin",
    "Custom",
];

const Background = () => {
    const [selectedBackground, setSelectedBackground] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBackground(event.target.value);
    };

    return (
        <div>
            <label htmlFor="background-select">Select Background:</label>
            <select id="background-select" value={selectedBackground} onChange={handleChange}>
                {backgroundOptions.map((background) => (
                    <option key={background} value={background}>
                        {background}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Background;
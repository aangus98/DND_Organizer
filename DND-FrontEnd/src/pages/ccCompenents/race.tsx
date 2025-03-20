import React from "react";
import { useState } from "react";

// Removed unused raceOptions to resolve the compile error

const dwarfSubraces = [
    "Hill Dwarf",
    "Mountain Dwarf",
    "Duergar",
];
const elfSubraces = [
    "High Elf",
    "Wood Elf",
    "Drow",
];
const gnomeSubraces = [
    "Forest Gnome",
    "Rock Gnome",
    "Deep Gnome",
];
const humanSubraces = [
    "Variant Human",
    "Standard Human",
];
const tieflingSubraces = [
    "Asmodeus Tiefling",
    "Zariel Tiefling",
    "Feral Tiefling",
    "Levistus Tiefling",
    "Mephistopheles Tiefling",
    "Dispater Tiefling",
];
const dragonbornSubraces = [
    "Black Dragonborn",
    "Blue Dragonborn",
    "Brass Dragonborn",
    "Bronze Dragonborn",
    "Copper Dragonborn",
    "Gold Dragonborn",
    "Green Dragonborn",
    "Red Dragonborn",
    "Silver Dragonborn",
    "White Dragonborn",
];
const aasimarSubraces = [
    "Protector Aasimar",
    "Scourge Aasimar",
    "Fallen Aasimar",
];
const githSubraces = [
    "Githyanki",
    "Githzerai",
];

const [chosenRace, setChosenRace] = useState("");

const selectedRaceSubraces: { [key: string]: string[] } = {
    Aarakocra: [],
    Aasimar: aasimarSubraces,
    Bearfolk: [],
    Bugbear: [],
    Catfolk: [],
    Centaur: [],
    Cervan: [],
    Changeling: [],
    Cnidarian: [],
    Corvum: [],
    Cyclopian: [],
    Darakhul: [],
    Dragonborn: dragonbornSubraces,
    Duergar: [],
    Dwarf: dwarfSubraces,
    Elf: elfSubraces,
    Erina: [],
    Etherean: [],
    Firbolg: [],
    Gallus: [],
    Genasi: [],
    Geleton: [],
    Giff: [],
    Gith: githSubraces,
    Gnome: gnomeSubraces,
    Gobboc: [],
    Goblin: [],
    Goliath: [],
    Golynn: [],
    Grung: [],
    Fairy: [],
    Hadozee: [],
    HalfElf: [],
    HalfOrc: [],
    Halfling: [],
    Harengon: [],
    Hedge: [],
    Hobgoblin: [],
    Human: humanSubraces,
    Jerbeen: [],
    Kalashtar: [],
    Kender: [],
    Kenku: [],
    Kobold: [],
    Leonin: [],
    Locathah: [],
    Lizardfolk: [],
    Loxodon: [],
    Luma: [],
    Mapach: [],
    Minotaur: [],
    Orc: [],
    Owlin: [],
    Plasmoid: [],
    Quickstep: [],
    Rakin: [],
    Raptor: [],
    Ratatosk: [],
    Ravenfolk: [],
    Satarre: [],
    Satyr: [],
    Shade: [],
    Shifter: [],
    SimicHybrid: [],
    Strig: [],
    Tabaxi: [],
    TheDisembodied: [],
    ThriKreen: [],
    Tiefling: tieflingSubraces,
    Tortle: [],
    Triton: [],
    Vedalken: [],
    Verdan: [],
    Vulpin: [],
    Warforged: [],
    Wechselkind: [],
    YuanTi: [],
    Custom: [],
};

const getSubraces = (chosenRace: string): string[] => {
    return selectedRaceSubraces[chosenRace] || [];
    // Default to an empty array if no subraces are found
};

export default getSubraces;






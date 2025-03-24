// src/components/NoteDisplay.js
import React from "react";

const NoteDisplay = ({ notes }) => {
  return (
    <div className="p-4 mt-4 border-2 border-gray-300 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl">Your Notes:</h2>
      <div className="mt-2 text-lg">
        {notes.split("\n").map((line, index) => (
          <p key={index} className="py-1">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NoteDisplay;

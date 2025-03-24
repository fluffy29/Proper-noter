// src/components/NotesEditor.js
import React, { useState } from "react";

const NotesEditor = ({ onSave }) => {
  const [notes, setNotes] = useState("");

  const handleChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSave = () => {
    onSave(notes); // Passing the notes back to the parent
    setNotes("");
  };

  return (
    <div className="p-4">
      <textarea
        value={notes}
        onChange={handleChange}
        className="w-full h-64 border-2 p-4 rounded-lg shadow-lg focus:outline-none"
        placeholder="Write your notes here..."
      />
      <button
        onClick={handleSave}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save Notes
      </button>
    </div>
  );
};

export default NotesEditor;

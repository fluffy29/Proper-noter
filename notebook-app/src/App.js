// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import NotesEditor from "./components/NotesEditor";
import NoteDisplay from "./components/NoteDisplay";

const App = () => {
  const [notes, setNotes] = useState("");

  const handleSaveNotes = (newNotes) => {
    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex p-4">
        <div className="w-1/2">
          <NotesEditor onSave={handleSaveNotes} />
        </div>
        <div className="w-1/2">
          <NoteDisplay notes={notes} />
        </div>
      </div>
    </div>
  );
};

export default App;

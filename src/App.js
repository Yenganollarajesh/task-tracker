import React, { useState, useEffect } from "react";
import AddNote from "./components/AddTask";
import NoteList from "./components/TaskList";
import "./styles/App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(); // Fetch notes when the app loads
  }, []);

  const fetchNotes = async () => {
    const response = await fetch("http://localhost:5000/notes");
    const data = await response.json();
    setNotes(data);
  };

  const addNote = async (note) => {
    const response = await fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    const newNote = await response.json();
    setNotes([...notes, newNote]);
  };

  const updateNote = async (updatedNote) => {
    const response = await fetch(`http://localhost:5000/notes/${updatedNote.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    });
    const updated = await response.json();
    const updatedNotes = notes.map((note) =>
      note.id === updated.id ? updated : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="app-container">
      <h1>Note Tracker</h1>
      <AddNote addNote={addNote} />
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;

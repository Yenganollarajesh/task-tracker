import React, { useState } from "react";
import EditNoteModal from "./EditNoteModal";

const NoteList = ({ notes, updateNote, deleteNote }) => {
  const [selectedNote, setSelectedNote] = useState(null);

  const handleEdit = (note) => setSelectedNote(note);
  const handleClose = () => setSelectedNote(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(id);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>{note.category}</td>
              <td>
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedNote && (
        <EditNoteModal note={selectedNote} updateNote={updateNote} onClose={handleClose} />
      )}
    </div>
  );
};

export default NoteList;

import React, { useState } from "react";

const AddNote = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    category: "Others",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      description: "",
      category: "Others",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={note.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <select name="category" value={note.category} onChange={handleChange}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;

import React, { useState } from "react";

const EditNoteModal = ({ note, updateNote, onClose }) => {
  const [updatedNote, setUpdatedNote] = useState(note);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedNote({
      ...updatedNote,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(updatedNote);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Note</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={updatedNote.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            value={updatedNote.description}
            onChange={handleChange}
            required
          ></textarea>
          <select
            name="category"
            value={updatedNote.category}
            onChange={handleChange}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
          <button type="submit">Save</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditNoteModal;

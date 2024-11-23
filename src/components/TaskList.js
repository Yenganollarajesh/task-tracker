import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import "./../styles/TaskList.css";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => setSelectedTask(task);
  const handleClose = () => setSelectedTask(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  return (
    <div className="task-list">
      <table>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Title</th>
            <th style={{ width: "40%" }}>Description</th>
            <th style={{ width: "10%" }}>Due Date</th>
            <th style={{ width: "10%" }}>Status</th>
            <th style={{ width: "16%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td style={{ width: "20%" }}>{task.title}</td>
              <td style={{ width: "45%" }}>{task.description}</td>
              <td style={{ width: "10%" }}>{task.dueDate}</td>
              <td style={{ width: "10%" }}>{task.status}</td>
              <td style={{ width: "16%" }}>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTask && (
        <EditTaskModal
          task={selectedTask}
          updateTask={updateTask}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default TaskList;

import React, { useState, useContext } from "react";
import { TimeTrackerContext } from "./TimeTrackerContext";

const TaskForm = () => {
  const [projectId, setProjectId] = useState("");
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState();
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const { projects, tasks, addTask } = useContext(TimeTrackerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(projectId, taskName, timeSpent, description, selectedDate);
    setProjectId("");
    setTaskName("");
    setTimeSpent(0);
    setDescription("");
  };

  const getProjectName = (projectId) => {
    const taskProject = projects.find(
      (project) => project.id === parseInt(projectId)
    );
    return taskProject ? taskProject.name : "";
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
  };

  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          required
        >
          <option value="">Select a Project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <br />
        <input type="date" onChange={handleDateChange} />
        <br />
        <br />
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          required
        />
        <br />

        <input
          type="number"
          value={timeSpent}
          onChange={(e) => setTimeSpent(parseInt(e.target.value))}
          placeholder="Time (in hours)"
          required
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <br />
        <button type="submit">Create Task</button>
      </form>

      {tasks.map((task) => (
        <div key={task.id}>
          <p>Project: {getProjectName(task.projectId)}</p>
          <p>Task: {task.taskName}</p>
          <p>Hours: {task.timeSpent} hours</p>
          <p>Description: {task.description}</p>
          <p>
            Date:
            {selectedDate && formatDate(selectedDate)}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default TaskForm;

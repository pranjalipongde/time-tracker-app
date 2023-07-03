import React, { useState, useContext } from "react";
import { TimeTrackerContext } from "./TimeTrackerContext";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const { addProject } = useContext(TimeTrackerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(projectName);
    setProjectName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
        required
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;

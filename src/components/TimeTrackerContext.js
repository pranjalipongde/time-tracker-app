import React, { createContext, useState } from "react";

export const TimeTrackerContext = createContext();

export const TimeTrackerProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addProject = (name) => {
    setProjects([...projects, { name, id: Date.now() }]);
  };

  const addTask = (projectId, taskName, timeSpent, description) => {
    setTasks([
      ...tasks,
      { projectId, taskName, timeSpent, description, id: Date.now() },
    ]);
  };

  const getTotalHoursForDay = (date) => {
    const totalHours = tasks
      .filter((task) => {
        const taskDate = new Date(task.id);
        return (
          taskDate.getDate() === date.getDate() &&
          taskDate.getMonth() === date.getMonth() &&
          taskDate.getFullYear() === date.getFullYear()
        );
      })
      .reduce((total, task) => total + task.timeSpent, 0);
    return totalHours;
  };

  return (
    <TimeTrackerContext.Provider
      value={{ projects, tasks, addProject, addTask, getTotalHoursForDay }}
    >
      {children}
    </TimeTrackerContext.Provider>
  );
};

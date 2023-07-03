import React, { useContext } from "react";
import { TimeTrackerContext } from "./TimeTrackerContext";

const DailyTotalHours = () => {
  const { projects, tasks } = useContext(TimeTrackerContext);

  const calculateTotalHoursForProject = (projectId) => {
    const projectTasks = tasks.filter(
      (task) => task.projectId === String(projectId)
    );
    const totalHours = projectTasks.reduce(
      (sum, task) => sum + task.timeSpent,
      0
    );
    return totalHours;
  };

  return (
    <div>
      {projects.map((project) => {
        const totalHours = calculateTotalHoursForProject(project.id);
        return (
          <div key={project.id}>
            <h1>{project.name}</h1>
            {tasks
              .filter((task) => task.projectId === String(project.id))
              .map((task) => (
                <div key={task.id}>
                  <div>Task Name - {task.taskName}</div>
                  <div>Hours - {task.timeSpent} hours</div>
                  <br />
                </div>
              ))}
            <p>
              Total Hours for {project.name} - {totalHours} hours
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DailyTotalHours;

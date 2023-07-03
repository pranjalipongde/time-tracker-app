import React from "react";
import { TimeTrackerProvider } from "./components/TimeTrackerContext";
import ProjectForm from "./components/ProjectForm";
import TaskForm from "./components/TaskForm";
import DailyTotalHours from "./components/DailyTotalHours";
import "./App.css";

function App() {
  return (
    <TimeTrackerProvider>
      <div>
        <h1>Time Tracking Application</h1>
        <ProjectForm />
        <TaskForm />
        <DailyTotalHours date={new Date()} />
      </div>
    </TimeTrackerProvider>
  );
}

export default App;

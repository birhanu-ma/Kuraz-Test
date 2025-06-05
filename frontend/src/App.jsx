import React from "react";
import AddTask from "./TaskManager/AddTask";
import TaskList from "./TaskManager/TaskList";
import CompletedTask from "./TaskManager/CompletedTask";

export default function App() {
  return (
    <div className="container">
      <AddTask />
      <TaskList />
      <CompletedTask />
    </div>
  );
}

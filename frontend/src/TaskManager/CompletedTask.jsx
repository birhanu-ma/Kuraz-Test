import React from "react";
import { useSelector } from "react-redux";

export default function CompletedTask() {
  const completedTask = useSelector((state) =>
    state.tasks.filter((task) => task.completed === true)
  );

  return (
    <>
      <h3>total completed items {completedTask.length}</h3>
    </>
  );
}

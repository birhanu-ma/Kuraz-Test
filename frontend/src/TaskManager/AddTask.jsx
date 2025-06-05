import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./TaskSlice";

export default function AddTask() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (!value.trim()) return;
    dispatch(
      addTask({
        title: value,
      })
    );
    setValue("");
  }

  return (
    <form className="todo" onSubmit={handleSubmit}>
      <h1>Task Manager</h1>
      <span className="input-form">
        <input
          type="text"
          value={value}
          placeholder="add task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </span>
    </form>
  );
}

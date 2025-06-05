import { createSlice } from "@reduxjs/toolkit";
const TaskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
    },
    toggleCompleted: (state, action) => {
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: action.payload.completed }
          : task
      );
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { deleteTask, toggleCompleted, addTask } = TaskSlice.actions;
export default TaskSlice.reducer;

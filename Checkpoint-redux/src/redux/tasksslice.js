import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tab: [{ name: "tas1", description: "desc1", completed: true }],
  },
  reducers: {
    addTask: (state, action) => {
      state.tab.push(action.payload);
    },

    changeStateTask: (state, action) => {
      const task = state.tab.find((t) => t.name === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      state.tab = state.tab.filter((task) => task.name !== action.payload);
    },
  },
});

export const { addTask, changeStateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

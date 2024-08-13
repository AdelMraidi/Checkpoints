import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksslice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksslice";

const TaskForm = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();

  const addtask = (e) => {
    e.preventDefault();
    const newTask = {
      name,
      description,
      completed: false,
    };
    dispatch(addTask(newTask));
  };
  return (
    <form onSubmit={addtask}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />

      <input type="submit" value="Submit form" />
    </form>
  );
};

export default TaskForm;

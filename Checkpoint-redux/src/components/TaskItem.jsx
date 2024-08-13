import React from "react";
import { useDispatch } from "react-redux";
import { changeStateTask, deleteTask } from "../redux/tasksslice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const changestate = () => {
    dispatch(changeStateTask(task.name));
  };

  const deletet = () => {
    dispatch(deleteTask(task.name));
  };
  return (
    <div>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
      <p>Completed: {task.completed.toString()}</p>
      <button onClick={changestate}>Change State</button>
      <button onClick={deletet}>Delete</button>
    </div>
  );
};

export default TaskItem;

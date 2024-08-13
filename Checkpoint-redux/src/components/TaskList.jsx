import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tab);
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

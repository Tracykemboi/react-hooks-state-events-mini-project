import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          key={index}
          category={task.category}
          text={task.text}
          onDelete={() => onTaskDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
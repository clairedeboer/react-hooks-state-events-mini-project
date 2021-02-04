import React from "react";
import Task from "./Task"; 

const TaskList = ({ tasks }) => {
  const [tasksArray, setTasksArray] = React.useState(tasks)

  const removeTask = (textToBeDeleted) => {
    setTasksArray(tasksArray.filter((task) => textToBeDeleted !== task.text))
  }
  //how do we know which task was removed? 

  const taskList = tasksArray.map((task) => {
    return <Task 
      key={task.text}
      text={task.text}
      category={task.category}
      removeTask={removeTask}
    />
  })
  return (
    <div className="tasks">{taskList}</div>
  );
}

export default TaskList;

import React, { useContext } from "react";
import { context } from "./App";

const TaskItems = () => {
  const { taskItems, setTaskItems } = useContext(context);

  const handleSetDone = (id) => {
    const taskIndex = taskItems.findIndex((index) => index.id === id);
     let newTaskItems = [...taskItems];
     newTaskItems[taskIndex].done = !newTaskItems[taskIndex].done;
    setTaskItems(newTaskItems);
  };

  const handleDeleteTask = (id) => {
    setTaskItems(taskItems.filter(t => t.id != id))
  }

  if (taskItems.length) {
    return (
      <ul className="list-group m-0 p-0 mt-2">
        {taskItems.map((tasks) => (
          <li
            className={`list-group-item d-flex justify-content-between   
            ${tasks.done ? "list-group-item-success" : ""}`}
            key={Math.random()}
          >
            {tasks.title}
            <span>
              <i
                className={`me-3 pointer ${
                  tasks.done
                    ? "fas fa-times text-warning "
                    : "fas fa-check text-success"
                } transition_200 text_hover_shadow`}
                onClick={() => handleSetDone(tasks.id)}
              ></i>

              <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" onClick={()=> handleDeleteTask(tasks.id)}></i>
            </span>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h2 className="text-center text-danger mt-4">هیچ کاری ثبت نشده</h2>;
  }
};

export default TaskItems;

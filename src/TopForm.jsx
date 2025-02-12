import React, { useContext, useState } from "react";
import { context } from "./App";

const TopForm = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(context);

  const handleSetTask = (event) => {
    setTask(event.target.value);
  };
  const handleAddTask = (event) => {
    event.preventDefault();
    setTaskItems([
      ...taskItems,
      { id: Math.random(), title: task, done: false },
    ]);
    setTask("")
  };

  return (
    <>
      <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
      <form onSubmit={handleAddTask}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={handleSetTask}
          />
          <button type="submit" className="btn btn-success me-1">
            ثبت
          </button>
        </div>
      </form>
    </>
  );
};

export default TopForm;

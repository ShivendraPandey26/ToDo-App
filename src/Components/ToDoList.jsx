import React from "react";

function ToDoList({ task, setTask }) {
  const handleRemove = (indexOfClickItem) => {
    const filterItem = task.filter((item) => indexOfClickItem !== item.id);

    setTask(filterItem);
    alert("Confirm: You want to delete this list item!!!");
  };

  const handleDoneMark = (index) => {
    setTask((prevTasks) =>
      prevTasks.map((taskItem) => {
        if (taskItem.id === index) {
          return { ...taskItem, complete: !taskItem.complete };
        }
        return taskItem;
      })
    );
  };

  return (
    <>
      <ul className="flex justify-center items-center flex-col gap-5 p-5">
        {task.map((item) => (
          <li
            className={`w-[90%] h-8 rounded-sm border-b-2 border-gray-400 flex justify-between ${
              item.complete ? "line-through bg-cyan-400" : ""
            }`}
            key={item.id}
          >
            <div>
              <span
                className="mx-3 text-lg cursor-pointer"
                onClick={() => handleDoneMark(item.id)}
              >
                <i className="fas fa-check-circle"></i>
              </span>

              <span>{item.title}</span>
            </div>
            <div>
              <span className="mx-3 text-xl cursor-pointer">
                <i className="fas fa-pen"></i>
              </span>
              <span
                className="mx-3 text-xl cursor-pointer"
                onClick={() => handleRemove(item.id)}
              >
                <i className="fas fa-trash"></i>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;

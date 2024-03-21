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

  const handleClear = () => {
    alert("DO YOU WANT TO CLEAR THE PAGE");    
    setTask([]);
  }

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
                className="mx-3 text-lg cursor-pointer   rounded-[100%] hover:text-white hover:bg-black  duration-300 ease-in-out"
                onClick={() => handleDoneMark(item.id)}
              >
                <i className="fas fa-check-circle"></i>
              </span>

              <span>{item.title}</span>
            </div>
            <div>
              {/* <span className="mx-3 text-xl cursor-pointer hover:text-violet-800 duration-300 ease-in-out">
                <i className="fas fa-pen"></i>
              </span> */}
              <span
                className="mx-3 text-xl cursor-pointer hover:text-red-600 duration-300 ease-in-out"
                onClick={() => handleRemove(item.id)}
              >
                <i className="fas fa-trash"></i>
              </span>
            </div>
          </li>
        ))}
      </ul>

      {task.length >= 1 && 
      <button className="w-[40%] h-10 rounded-lg mx-auto m-5 bg-red-600 text-white text-xl font-bold hover:bg-red-800 duration-300 ease-in-out"
      onClick={handleClear}
      >Clear</button>}
    </>
  );
}

export default ToDoList;

import React from "react";

function ToDoList() {
  return (
    <ul className="flex justify-center items-center flex-col gap-5 p-5">
      <li className="w-[90%] h-8 rounded-sm border-b-2 border-gray-400 flex justify-between">
        <div>
          <span className="mx-3 text-lg cursor-pointer">
            <i class="fas fa-check-square"></i>
          </span>

          <span>Task 1</span>
        </div>
        <div>
          <span className="mx-3 text-xl cursor-pointer">
            <i class="fas fa-pen"></i>
          </span>
          <span className="mx-3 text-xl cursor-pointer">
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </li>
      <li className="w-[90%] h-8 rounded-sm border-b-2 border-gray-400 flex justify-between">
        <div>
          <span className="mx-3 text-lg cursor-pointer">
            <i class="fas fa-check-square"></i>
          </span>

          <span>Task 2</span>
        </div>
        <div>
          <span className="mx-3 text-xl cursor-pointer">
            <i class="fas fa-pen"></i>
          </span>
          <span className="mx-3 text-xl cursor-pointer">
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </li>
      <li className="w-[90%] h-8 rounded-sm border-b-2 border-gray-400 flex justify-between">
        <div>
          <span className="mx-3 text-lg cursor-pointer">
            <i class="fas fa-check-square"></i>
          </span>

          <span>Task 3</span>
        </div>
        <div>
          <span className="mx-3 text-xl cursor-pointer">
            <i class="fas fa-pen"></i>
          </span>
          <span className="mx-3 text-xl cursor-pointer">
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </li>
    </ul>
  );
}

// text-cyan-700

export default ToDoList;

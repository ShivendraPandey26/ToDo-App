import React from "react";
import ToDoList from "./ToDoList";

function ToDoApp() {
  return (
    <>
      <div className="w-[80%] md:w-[40%] h-auto text-center mx-auto my-[10%] md:my-[5%] rounded-lg bg-slate-50">
        <h1 className="text-3xl font-bold font-sans underline underline-offset-8 p-10">
          ToDo App
        </h1>

        <div className="flex flex-col">
          <input
            type="text"
            name="input place"
            className="w-[80%] h-10 rounded-lg mx-auto p-5 font-semibold border-2"
            placeholder="Add items"
          />
          <button className="w-[80%] h-10 rounded-lg mx-auto m-5 bg-violet-600 text-white text-xl font-bold hover:bg-violet-800 duration-300 ease-in-out">
            Add
          </button>
        </div>
        <ToDoList />
      </div>
    </>
  );
}

export default ToDoApp;

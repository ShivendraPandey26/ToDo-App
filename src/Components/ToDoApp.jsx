import { useState } from "react";
import React from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

function ToDoApp() {
  const [userInput, setUserInput] = useState("");
  const [Task, setTask] = useState([]);

  const handleValue = () => {
    if (userInput === "") {
      alert("You must write something!!!");
    } else {
      const allInputs = {id: uuidv4(), title : userInput, complete: false}
      setTask([...Task, allInputs]);
      setUserInput("");
    }
  };

  return (
    <>
      <div className="w-[80%] md:w-[40%] h-auto text-center mx-auto my-[10%] md:my-[5%] rounded-lg bg-gray-200">
        <h1 className="text-3xl font-bold font-sans underline underline-offset-8 p-10">
          ToDo App
        </h1>

        <div className="flex flex-col">
          <input
            type="text"
            name="input place"
            className="w-[80%] h-10 rounded-lg mx-auto p-5 font-semibold border-2"
            placeholder="Add items"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="w-[80%] h-10 rounded-lg mx-auto m-5 bg-violet-600 text-white text-xl font-bold hover:bg-violet-800 duration-300 ease-in-out"
            onClick={handleValue}
          >
            Add
          </button>
        </div>
        

        {Task <= 1 && <h1 className="text-xl mt-10">
        "Welcome! Let's add a to-do list."
        </h1>}

        <ToDoList 
        task={Task} 
        setTask = {setTask}
        />
      </div>
    </>
  );
}

export default ToDoApp;

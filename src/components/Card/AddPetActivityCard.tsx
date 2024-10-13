import Image from "next/image";
import TaskCard from "./TaskCard";
import { useState } from "react";

export default function AddPetActivityCard() {
  const [tasks, setTasks] = useState<number[]>([]); // Array to store tasks (IDs)

  // Add a new task card
  const addNewTask = () => {
    setTasks((prevTasks) => [...prevTasks, prevTasks.length]); // Append new task with a unique ID
  };

  // Function to remove a task by ID
  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskId)); // Remove task with given ID
  };

  return (
    <div className="border px-6 rounded-[8px]">
      <div className="flex m-6 gap-4">
        <Image
          src="/Whiskers.jpg"
          width={93}
          height={93}
          alt="Picture of the author"
          className="rounded-full w-[93px] h-[93px] object-cover"
        />
        <div className="grid h-fit mt-4 content-end">
          <p className="justify-self-center text-subheading2">Buddy</p>
          <p className="text-soft-gray text-small-paragraph">Golden Retriever</p>
        </div>
      </div>

      <hr className="pb-6" />

      <div className="grid gap-6">
        {/* Render a TaskCard for each task in the array */}
        {tasks.map((task, index) => (
          <TaskCard key={index} taskId={task} removeTask={removeTask} /> // Pass removeTask and taskId as props
        ))}
      </div>

      <button
        onClick={addNewTask} // Add new task when button is clicked
        className="bg-white round-[8px] w-fit h-fit my-6 py-1 px-6 rounded-[8px] text-bright-green border-2 border-bright-green text-button"
      >
        + Add a task
      </button>
    </div>
  );
}

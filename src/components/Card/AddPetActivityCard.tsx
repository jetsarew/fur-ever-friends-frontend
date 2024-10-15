import Image from "next/image";
import TaskCard from "./TaskCard";
import { useState } from "react";

interface AddPetActivityCardInterface {
  handleDeletePetActivityCard: () => void
}
export default function AddPetActivityCard({ handleDeletePetActivityCard }: AddPetActivityCardInterface) {
  const [tasks, setTasks] = useState<number[]>([0]); // Array to store tasks (IDs)

  // Add a new task card
  const addNewTask = () => {
    setTasks((prevTasks) => [...prevTasks, prevTasks.length]); // Append new task with a unique ID
  };

  // Function to remove a task by ID
  const removeTask = (taskId: number) => {
    if(tasks.length == 1){
      handleDeletePetActivityCard();
    }
    else{
      setTasks((prevTasks) => prevTasks.filter((task) => task !== taskId)); // Remove task with given ID
    }
  };

  return (
    <div className="border px-6 py-8 rounded-[8px]">
      <div className="flex flex-row items-center pb-6 gap-6">
        <Image
          src="/Whiskers.jpg"
          width={186}
          height={186}
          alt="Picture of the author"
          className="rounded-full w-[93px] h-[93px] object-cover"
        />
        <div className="flex flex-col gap-1 content-end">
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
        type="button"
        onClick={addNewTask} // Add new task when button is clicked
        className="bg-white round-[8px] w-fit h-fit mt-6 px-6 py-2 rounded-[8px] text-bright-green border-2 border-bright-green text-button"
      >
        + Add a task
      </button>
    </div>
  );
}

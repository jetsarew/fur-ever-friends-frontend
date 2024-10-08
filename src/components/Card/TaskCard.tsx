"use client";

import Image from "next/image";

interface TaskCardProps {
  taskId: number;
  removeTask: (taskId: number) => void; // Function to remove task
}

export default function TaskCard({ taskId, removeTask }: TaskCardProps) {
  return (
    <div>
      <div className="flex justify-between font-poppins">
        <p className="font-medium mb-2">Task</p>
        <Image
          src="/cross.svg"
          width={24}
          height={24}
          alt="Delete task"
          className="rounded-full cursor-pointer"
          onClick={() => removeTask(taskId)} // Call removeTask with taskId when clicked
        />
      </div>

      <select className="w-[241px] border rounded-[8px] px-[18px] py-[15px]">
        <option value="feeding">Feeding</option>
        <option value="exercise">Exercise</option>
        <option value="grooming">Grooming</option>
        <option value="training">Training</option>
        <option value="administering medication">Administering Medication</option>
        <option value="relaxation">Relaxation</option>
      </select>

      <div className="mt-4">
        <p className="font-medium mb-2">Detail</p>
        <textarea className="w-full border rounded-[8px] resize-none px-[18px] py-[15px] flex flex-col" />
      </div>

      <hr className="mt-6" />
    </div>
  );
}

"use client";

import { CreateTaskDto, ServiceType } from "@/dto/activity.dto";
import Image from "next/image";

interface TaskCardProps {
  task: CreateTaskDto;
  petId: string;
  taskIndex: number;
  handleTaskTypeEdited: (petId: string, taskIndex: number, type: ServiceType) => void;
  handleTaskDetailEdited: (petId: string, taskIndex: number, detail: string) => void;
  removeTask: () => void;
}

export default function TaskCard({ task, petId, taskIndex, handleTaskTypeEdited, handleTaskDetailEdited, removeTask }: TaskCardProps) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-body-bold mb-2">Task</p>
        <Image
          src="/cross.svg"
          width={24}
          height={24}
          alt="Delete task"
          className="rounded-full cursor-pointer"
          onClick={() => removeTask()} // Call removeTask with taskId when clicked
        />
      </div>

      <select className="w-[275px] border rounded-[8px] px-[18px] py-[15px]"
        onChange={(e) => handleTaskTypeEdited(petId, taskIndex, e.target.value as ServiceType)}
        value={task.type}
      >
        <option value="EXERCISING">Exercise</option>
        <option value="FEEDING">Feeding</option>
        <option value="GROOMING">Grooming</option>
        <option value="TRAINING">Training</option>
        <option value="ADMINISTERING_MEDICATION">Administering Medication</option>
        <option value="RELAXATION">Relaxation</option>
      </select>

      <div className="mt-4 flex flex-col">
        <p className="text-body-bold mb-2">Detail</p>
        <textarea 
          className="w-full border rounded-[8px] resize-none px-[18px] py-[15px]" 
          value={task.detail}
          onChange={(e) => handleTaskDetailEdited(petId, taskIndex, e.target.value)}
        />
      </div>

      <hr className="mt-6" />
    </div>
  );
}

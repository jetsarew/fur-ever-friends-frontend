import Image from "next/image";
import TaskCard from "./TaskCard";
import { PetModelResponse } from "@/types/response.type";
import { getAttachmentSrc } from "@/hooks/useImage";
import { CreateTaskDto, ServiceType } from "@/dto/activity.dto";

interface AddPetActivityCardInterface {
  pet: PetModelResponse;
  tasks: CreateTaskDto[];
  handleTaskAdded: (petId: string) => void;
  handleTaskRemoved: (petId: string, taskIndex: number) => void;
  handleTaskTypeEdited: (petId: string, taskIndex: number, type: ServiceType) => void;
  handleTaskDetailEdited: (petId: string, taskIndex: number, detail: string) => void;
}
export default function AddPetActivityCard({ pet, tasks, handleTaskAdded, handleTaskRemoved, handleTaskTypeEdited, handleTaskDetailEdited }: AddPetActivityCardInterface) {

  return (
    <div className="border px-6 py-8 rounded-[8px]">
      <div className="flex flex-row items-center pb-6 gap-6">
        <Image
          src={getAttachmentSrc(pet.imageUrl)}
          width={186}
          height={186}
          alt="Picture of the author"
          className="rounded-full w-[93px] h-[93px] object-cover"
        />
        <div className="flex flex-col gap-1 content-end">
          <p className="justify-self-center text-subheading2">{pet.name ?? "Anonymous"}</p>
          <p className="text-soft-gray text-[16px] font-light leading-[100%]">{pet.breed.name}</p>
        </div>
      </div>

      <hr className="pb-6" />

      <div className="grid gap-6">
        {/* Render a TaskCard for each task in the array */}
        {tasks.map((task, index) => (
          <TaskCard 
            key={index} 
            task={task} 
            petId={pet.id} 
            taskIndex={index}
            handleTaskTypeEdited={handleTaskTypeEdited}
            handleTaskDetailEdited={handleTaskDetailEdited}
            removeTask={() => handleTaskRemoved(pet.id, index)} 
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => handleTaskAdded(pet.id)} // Add new task when button is clicked
        className="bg-white round-[8px] w-fit h-fit mt-6 px-6 py-2 rounded-[8px] text-bright-green border-2 border-bright-green text-button"
      >
        + Add a task
      </button>
    </div>
  );
}

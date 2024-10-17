"use client";

import { getAttachmentSrc } from "@/hooks/useImage";
import { PetModelResponse } from "@/types/response.type";
import Image from "next/image";

interface AddPetEntryInterface {
  pet: PetModelResponse;
  onAddNewPet: (petId: string) => void;
  isAdded: boolean;
}

export default function AddPetEntry({
  pet,
  onAddNewPet,
  isAdded,
}: AddPetEntryInterface) {
  const onButtonClicked = () => {
    if (!isAdded) {
      onAddNewPet(pet.id);
    }
  };

  return (
    <div className="w-full px-6 py-3 flex flex-row justify-between items-center hover:bg-[#F8F8F8]">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={getAttachmentSrc(pet.imageUrl)}
          width={80}
          height={80}
          alt="pet profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p>{pet.name}</p>
      </div>
      <button
        type="button"
        onClick={onButtonClicked}
        className={`w-[81.15px] px-6 py-2 flex flex-row justify-center items-center rounded-lg ${
          isAdded
            ? "text-body-bold text-soft-gray"
            : "text-button text-white bg-bright-blue"
        }`}
      >
        {isAdded ? "Added" : "Add"}
      </button>
    </div>
  );
}

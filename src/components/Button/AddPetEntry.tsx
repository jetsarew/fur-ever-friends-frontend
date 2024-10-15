"use client";

import Image from "next/image";
import { useState } from "react";

interface AddPetEntryInterface {
    onAddNewPet: () => void
}

export default function AddPetEntry({ onAddNewPet }: AddPetEntryInterface) {
  const [added, setAdded] = useState<boolean>(false);

  const onButtonClicked = () => {
    if(!added){
        onAddNewPet();
    }
    setAdded(true);
}

  return (
    <div className="w-full px-6 py-3 flex flex-row justify-between items-center hover:bg-[#F8F8F8]">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/Whiskers.jpg"
          width={80}
          height={80}
          alt="pet profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p>Whiskers</p>
      </div>
      <button
        type="button"
        onClick={onButtonClicked}
        className={`px-6 py-2 flex flex-row justify-center items-center rounded-lg ${added ? "text-body-bold text-soft-gray" : "text-button text-white bg-bright-blue"}`}
      >
        {added ? "Added" : "Add"}
      </button>
    </div>
  );
}

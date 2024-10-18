"use client";

import AddPetButton from "@/components/Button/AddPetButton";
import AddPetActivityCard from "@/components/Card/AddPetActivityCard";
import { usePets } from "@/hooks/usePets";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create_activity() {
  const userData = useAppSelector((state) => state.auth.user);
  const { petList } = usePets();
  const router = useRouter();
  const isAllowed =
    userData && userData.customer && userData?.role == "CUSTOMER";
  const [petsInActivity, setPetsInActivity] = useState<string[]>([]);

  if (!isAllowed) {
    router.push("/");
  }

  const pets = petList.filter((pet) => {
    return pet.ownerId == userData?.customer?.id;
  });

  console.log(pets);

  const handleDeletePetActivityCard = (petId: string) => {
    setPetsInActivity((prev) => prev.filter((id) => id !== petId));
  };

  const addNewPetToActivity = (petId: string) => {
    setPetsInActivity((prev) => [...prev, petId]);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white w-[680px] h-full flex justify-center">
        <form noValidate className="justify-center pb-24 w-full bg-white">
          <div className="grid grid-row text-black gap-8  bg-white">
            <div className="flex flex-col gap-3">
              <label className="text-dark-blue block text-subheading2">
                Activity Name
              </label>
              <input
                type="text"
                name="activityName"
                className="w-full border rounded-[8px] py-[15px] px-[18px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-dark-blue block text-subheading2">
                Duration
              </label>
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">Start</p>
                <div className="flex flex-row w-[65%] gap-8">
                  <input
                    type="date"
                    name="startDate"
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                  />
                  <input
                    type="time"
                    name="startTime"
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">End</p>
                <div className="flex flex-row w-[65%] gap-8">
                  <input
                    type="date"
                    name="endDate"
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                    required
                  />
                  <input
                    type="time"
                    name="endTime"
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-dark-blue block text-subheading2">
                Location
              </label>
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">Place</p>
                <input
                  type="text"
                  name="place"
                  className="w-full border rounded-[8px] py-[15px] px-[18px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">Detail</p>
                <input
                  type="text"
                  name="detail"
                  className="w-full border rounded-[8px] py-[15px] px-[18px]"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline pb-8">
                <label className="text-dark-blue block text-subheading2">
                  Pet Activities
                </label>
                <AddPetButton
                  pets={pets}
                  petsInActivity={petsInActivity}
                  onAddNewPet={addNewPetToActivity}
                />
              </div>

              <div className="grid gap-6">
                {petsInActivity.map((petId, index) => (
                  <AddPetActivityCard
                    key={index}
                    pet={pets.filter((pet) => pet.id == petId)[0]}
                    handleDeletePetActivityCard={handleDeletePetActivityCard}
                  />
                ))}
                {petsInActivity.length == 0 && (
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={"/empty.svg"}
                      width={200}
                      height={200}
                      alt={"empty"}
                    />
                    <p className="text-center text-soft-gray">
                      No pets here! Add your pet to make the most of this activity.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-bright-green round-[8px] w-fit h-fit justify-self-center py-3 px-6 rounded-[8px] text-white text-button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

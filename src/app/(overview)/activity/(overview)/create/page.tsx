"use client";

import AddPetButton from "@/components/Button/AddPetButton";
import AddPetActivityCard from "@/components/Card/AddPetActivityCard";
import Image from "next/image";
import { useState } from "react";


export default function Create_activity() {
  const [formData, setFormData] = useState({
    activityName: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: {
      place: "",
      detail: "",
    },
    petActivities: [] as number[], // Array to hold the pet activities (unique IDs for each card)
  });

  // Update input fields with correct type for event 'e'
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeletePetActivityCard = () => {
    setFormData((prevData) => ({
      ...prevData,
      petActivities: prevData.petActivities.slice(0, -1),
    }));    
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [name]: value,
      },
    }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check for required fields
    if (
      !formData.activityName ||
      !formData.startDate ||
      !formData.startTime ||
      !formData.endDate ||
      !formData.endTime ||
      !formData.location.place ||
      !formData.location.detail
    ) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    console.log(formData);
    // Perform saving logic here, e.g., submit to a server
  };

  // Add new pet activity card
  const addNewPetActivity = () => {
    setFormData((prevData) => ({
      ...prevData,
      petActivities: [...prevData.petActivities, prevData.petActivities.length], // Add new pet activity with a unique ID
    }));
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white w-[680px] h-full flex justify-center">
        

        <form noValidate onSubmit={handleSave} className="justify-center pb-24 w-full bg-white">
          <div className="grid grid-row text-black gap-8  bg-white">
            {/* Activity Name */}
            <div className="flex flex-col gap-3">
              <label className="text-dark-blue block text-subheading2">
                Activity Name
              </label>
              <input
                type="text"
                name="activityName"
                value={formData.activityName}
                onChange={handleInputChange}
                className="w-full border rounded-[8px] py-[15px] px-[18px]"
                required  // Make this field required
              />
            </div>

            {/* Duration */}
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
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                    required  // Make this field required
                  />
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                    required  // Make this field required
                  />
                </div>
              </div>

              {/* End */}
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">End</p>
                <div className="flex flex-row w-[65%] gap-8">
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                    required  // Make this field required
                  />
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                    required  // Make this field required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-4">
              <label className="text-dark-blue block text-subheading2">
                Location
              </label>
              <div className="flex flex-col gap-3">
              <p className="text-body-bold">Place</p>
              <input
                type="text"
                name="place"
                value={formData.location.place}
                onChange={handleLocationChange}
                className="w-full border rounded-[8px] py-[15px] px-[18px]"
                required  // Make this field required
              />
              </div>
              <div className="flex flex-col gap-3">
              <p className="text-body-bold">Detail</p>
              <input
                type="text"
                name="detail"
                value={formData.location.detail}
                onChange={handleLocationChange}
                className="w-full border rounded-[8px] py-[15px] px-[18px]"
                required  // Make this field required
              />
            </div>
            </div>

            {/* Pet Activities */}
            <div>
              <div className="flex justify-between items-baseline pb-8">
                <label className="text-dark-blue block text-subheading2">
                  Pet Activities
                </label>
                <AddPetButton onAddNewPet={addNewPetActivity}/>
                
              </div>

              <div className="grid gap-6">
              
              {formData.petActivities.map((activity, index) => (
                <AddPetActivityCard key={index} handleDeletePetActivityCard={handleDeletePetActivityCard}/>
              ))}
              {
                formData.petActivities.length == 0 &&
                <div className="flex flex-col items-center gap-2">
                  <Image 
                    src={"/empty.svg"}
                    width={200}
                    height={200}
                    alt={"empty"}
                  />
                  <p className="text-center text-soft-gray">Please choose at least 1 pet</p>
                </div>
              }

              </div>
            </div>

            {/* Save Button */}
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

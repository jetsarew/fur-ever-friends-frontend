"use client";

import AddPetActivityCard from "@/components/Card/AddPetActivityCard";
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
        

        <form onSubmit={handleSave} className="justify-center pb-24 w-full bg-white">
          <div className="grid grid-row text-black gap-8  bg-white">
            {/* Activity Name */}
            <div>
              <label className="text-bright-blue block text-subheading2 pb-4">
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
            <div>
              <label className="text-bright-blue block text-subheading2 pb-4">
                Duration
              </label>
              
              {/* Start */}
              <p className="text-body-bold mb-2">Start</p>
              <div className="flex flex-row w-[65%] gap-8 mb-4">
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

              {/* End */}
              <p className="text-body-bold mb-2">End</p>
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

            {/* Location */}
            <div>
              <label className="text-bright-blue block text-subheading2 pb-4">
                Location
              </label>
              <p className="text-body-bold mb-2">Place</p>
              <input
                type="text"
                name="place"
                value={formData.location.place}
                onChange={handleLocationChange}
                className="w-full border rounded-[8px] py-[15px] px-[18px] mb-6"
                required  // Make this field required
              />
              <p className="text-body-bold mb-2">Detail</p>
              <input
                type="text"
                name="detail"
                value={formData.location.detail}
                onChange={handleLocationChange}
                className="w-full border rounded-[8px] py-[15px] px-[18px]"
                required  // Make this field required
              />
            </div>

            {/* Pet Activities */}
            <div>
              <div className="flex justify-between pb-8">
                <label className="text-bright-blue block text-subheading2">
                  Pet Activities
                </label>
                <button
                  type="button"
                  onClick={addNewPetActivity} // Trigger adding new pet activity
                  className="bg-bright-green round-[8px] w-fit h-fit py-1 px-6 rounded-[8px] text-white text-button"
                >
                  + Add another pet
                </button>
              </div>

              <div className="grid gap-6">
              
              {formData.petActivities.map((activity, index) => (
                <AddPetActivityCard key={index} />
              ))}

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

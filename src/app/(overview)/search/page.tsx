"use client";

import { useEffect, useState } from "react";
import FeedCard from "@/components/Card/FeedCard";
import Image from "next/image";
import { ActivityModelResponse } from "@/types/response.type";
import { activityService } from "@/services/activity.service";


export default function FeedPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activities, setActivities] = useState<ActivityModelResponse[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update search query state when the user types
  };


  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await activityService.getActivities();
        setActivities(response.filter((activity) => activity.state == "PENDING"));
        console.log(response);
      } catch(error) {

      }
    }

    fetchActivities();
  }, []);

  return (
    <div>
     
      <div className="w-full pb-9">
        <div className="flex justify-center">
          <div className="w-[680px]">
            <div className="flex items-center gap-4">
              <div className="bg-white flex border-2 border-bright-blue rounded-md w-full ">
                <Image
                  src="/search.svg"
                  width={16}
                  height={16}
                  className="ml-3"
                  alt="search"
                />
                <input
                  type="text"
                  className="w-full p-3 rounded-md focus:outline-none text-black bg-white"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch} // Capture user input
                />
              </div>
              <button className="w-fit h-fit">
                <Image
                  src="/filter.svg"
                  width={25}
                  height={48}
                  alt="filter"
                />
              </button>
            </div>

            <div className="mt-8 grid gap-8"> 
              {activities.map((activity, index) => (
                <FeedCard key={index} activity={activity}/>
              ))}
            </div>
            {
                activities.length == 0 &&
                <div className="pt-[56px] w-full flex flex-col items-center gap-6">
                    <Image 
                        src={"/match-not-found.svg"}
                        width={300}
                        height={300}
                        alt={"not found"}
                    />
                    <p className="text-center text-soft-gray text-body-paragraph">{"Looks like it's quiet here."}<br/>{"We'll update this feed when new activities are posted."}</p>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
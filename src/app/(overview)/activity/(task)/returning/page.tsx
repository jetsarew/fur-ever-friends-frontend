"use client";

import ActivityCard from "@/components/Card/ActivityCard";
import { activityService } from "@/services/activity.service";
import { useAppSelector } from "@/store/hooks";
import { ActivityModelResponse } from "@/types/response.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReturningActivitiesPage(){
    const [activities, setActivities] = useState<ActivityModelResponse[]>([]);
    
    const userData = useAppSelector((state) => state.auth.user);
    
    useEffect(() => {
        const fetchMyActivities = async () => {
            let response;
            
            if(userData?.role == "CUSTOMER"){
                response = await activityService.getMyActivity();
            }
            else {
                response = await activityService.getActivitiesByPetSitter();
            }
            
            console.log(response);
            setActivities(response.filter((activity) => {
                return activity.state == "RETURNING";
            }));
        }

        fetchMyActivities();
    }, []);

    return (
        <div className="flex flex-col gap-6">
            {
                activities.map((activity, index) => {
                    return  <ActivityCard key={index} role={userData?.role} activity={activity}/>
                })
            }
            {
                activities.length == 0 &&
                <div className="pt-[56px] w-full flex flex-col items-center gap-6">
                    <Image 
                        src={"/not-found.svg"}
                        width={300}
                        height={300}
                        alt={"not found"}
                    />
                    <p className="text-center text-soft-gray text-body-paragraph">No activities currently in the returning stage.<br/> When it’s time to bring your pet home, you’ll find them here!</p>
                </div>
            }
        </div>
    );
}
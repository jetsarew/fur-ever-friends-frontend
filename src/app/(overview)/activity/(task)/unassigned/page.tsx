"use client";

import ActivityCard from "@/components/Card/ActivityCard";
import { activityService } from "@/services/activity.service";
import { requestService } from "@/services/request.service";
import { useAppSelector } from "@/store/hooks";
import { ActivityModelResponse, RequestModelResponse } from "@/types/response.type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UnassignedActivitiesPage(){
    const [activities, setActivities] = useState<ActivityModelResponse[]>([]);
    const [requests, setRequests] = useState<RequestModelResponse[]>([]);
    
    const userData = useAppSelector((state) => state.auth.user);
    
    useEffect(() => {
        const fetchMyActivities = async () => {
            let response;
            
            if(userData?.role == "CUSTOMER"){
                response = await activityService.getMyActivity();
                setActivities(response.filter((activity) => {
                    return activity.state == "PENDING";
                }));
            }
            else {
                response = await activityService.getActivities();
                const response2 = await requestService.getRequestedActivity();
                setActivities(response.filter((activity) => {
                    return activity.requests.some((request) => response2.some((request2) => request2.id == request.id));
                }));
                setRequests(response2);
            }
            
            console.log(response);
            // setActivities(response.filter((activity) => {
            //     return activity.state == "PENDING";
            // }));
        }

        fetchMyActivities();
    }, []);

    return (
        <div className="flex flex-col gap-6">
            {
                userData?.role == "CUSTOMER" &&
                <Link 
                    href={"create"}
                    className="px-6 py-4 flex flex-row justify-center items-center text-button text-white bg-bright-green rounded-lg"
                >+ Create new activity</Link>
            }
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
                    <p className="text-center text-soft-gray text-body-paragraph">No unassigned activities at the moment.<br/> Create an activity to find the perfect pet sitter!</p>
                </div>
            }
        </div>
    );
}
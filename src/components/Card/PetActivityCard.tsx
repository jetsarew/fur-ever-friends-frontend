"use client";

import { useState } from "react";
import ActivityProgressBar from "./ActivityProgressBar";
import ActivitySection from "./ActivitySection";
import { ServiceModelResponse } from "@/types/response.type";
import PetCard from "./PetCard";
import { getServiceName } from "@/hooks/useStatePriority";
interface PetActivityCardProps {
    showCheckBox: boolean;
    showProgressBar: boolean;
    service: ServiceModelResponse;
    handleTaskUpdated?: (serviceId: string, taskId: string) => void;
    canUpdateTaskStatus: boolean;
}

export default function PetActivityCard({
    showCheckBox,
    showProgressBar,
    service,
    handleTaskUpdated,
    canUpdateTaskStatus,
}: PetActivityCardProps){
    const getNumOfTaskDone = () => {
        let count = 0;
        service.tasks.forEach((task) => {
            count += task.status ? 1 : 0;
        })
        return count;
    }

    const [numOfTaskDone, setNumOfTaskDone] = useState<number>(getNumOfTaskDone());

    const onActivityCheckBoxClicked = (taskId: string) => {
        setNumOfTaskDone(numOfTaskDone + (service.tasks.filter((task) => task.id == taskId)[0].status == true ? -1 : 1)); 
        if(handleTaskUpdated) {
            handleTaskUpdated(service.id, taskId);
        } 
    }

    return (
        <div className="flex flex-col items-center">
            <div className={`w-[544px] px-4 pt-3 flex flex-col items-start border rounded-lg ${showProgressBar && "border-b-0 rounded-b-none"} border-bd-gray `}>
                <PetCard
                    pet={service.pet}
                    width={"w-full"}
                    padding={"pt-3"}
                    border={"border-b border-bd-gray"}
                />
                <div className="w-full flex flex-col items-start">
                    {
                        service.tasks.map((task, index) => {
                            return (
                                <ActivitySection 
                                    key={index}
                                    task={task}
                                    title={getServiceName(task.type)}
                                    description={task.detail}
                                    border={index != service.tasks.length - 1 ? "border-b border-bd-gray" : ""}
                                    showCheckBox={showCheckBox}
                                    canUpdateTaskStatus={canUpdateTaskStatus}
                                    onCheckBoxClicked={onActivityCheckBoxClicked}
                                />
                            )
                        })
                    }
                </div>
            </div>
            {   
                showProgressBar &&
                <ActivityProgressBar 
                    numberOfTaskDone={numOfTaskDone}
                    numberOfAllTask={service.tasks.length}
                />
            }
        </div>
    )
}
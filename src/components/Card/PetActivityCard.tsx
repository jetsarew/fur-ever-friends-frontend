"use client";

import { useState } from "react";
import ActivityProgressBar from "./ActivityProgressBar";
import ActivitySection from "./ActivitySection";
import { ServiceModelResponse } from "@/types/response.type";
interface PetActivityCardProps {
    showCheckBox: boolean;
    showProgressBar: boolean;
    service: ServiceModelResponse;
}

export default function PetActivityCard({
    showCheckBox,
    showProgressBar,
    service,
}: PetActivityCardProps){
    const [numOfTaskDone, setNumOfTaskDone] = useState<number>(0);
    const onActivityCheckBoxClicked = (d: number) => {
        setNumOfTaskDone(numOfTaskDone + d); 
    }
    return (
        <div className="flex flex-col items-center">
            <div className={`w-[544px] px-4 pt-3 flex flex-col items-start border rounded-lg ${showProgressBar && "border-b-0 rounded-b-none"} border-bd-gray `}>
                {/* <PetCard 
                    //pet={}
                    width={"w-full"}
                    padding={"pt-3"}
                    border={"border-b border-bd-gray"}
                /> */}
                <div className="w-full flex flex-col items-start">
                    {
                        service.tasks.map((task, index) => {
                            return (
                                <ActivitySection 
                                    key={index}
                                    title={task.type}
                                    description={task.detail}
                                    border={index != service.tasks.length - 1 ? "border-b border-bd-gray" : ""}
                                    showCheckBox={showCheckBox}
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
                    numberOfAllTask={3}
                />
            }
        </div>
    )
}
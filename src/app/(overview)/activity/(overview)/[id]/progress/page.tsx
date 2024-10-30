"use client";

import ActivityProgressCard from "@/components/Card/ActivityProgressCard";
import PetActivityCard from "@/components/Card/PetActivityCard";
import TextArea from "@/components/Input/TextArea";
import { Toast } from "@/components/Toast/Toast";
import { activityService } from "@/services/activity.service";
import { useAppSelector } from "@/store/hooks";
import { ActivityModelResponse, TaskModelResponse } from "@/types/response.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ActivityProgressPage({ params }: {
    params: { id: string }
}
){
    const [activity, setActivity] = useState<ActivityModelResponse | null>(null);
    const [perviousActivity, setPreviousActivity] = useState<ActivityModelResponse | null>(null);

    const userData = useAppSelector((state) => state.auth.user);

    const fetchActivity = async () => {
        const response = await activityService.getActivityById(params.id);
        setActivity(response);
        setPreviousActivity(response);
    }

    const handleTaskUpdated = (serviceId: string, taskId: string) => {
        setActivity((prev) => {
            if (!prev) return prev;
    
            return {
                ...prev,
                services: prev.services.map((service) => {
                    if (service.id === serviceId) {
                        return {
                            ...service,
                            tasks: service.tasks.map((task) => 
                                task.id === taskId ? { ...task, status: !task.status } : task
                            ),
                        };
                    }
                    return service;
                }),
            };
        });
    };
    

    const handleUpdateTaskStatus = async (task: TaskModelResponse) => {
        if(!activity?.id) return;
        await activityService.updateTaskStatus(
            activity.id,
            task.id,
            {
                status: task.status
            }
        )
    }

    const onSaveTaskStatusButtonClicked = async() => {
        try {
            activity?.services.forEach((service) => {
                const previousService = perviousActivity?.services.filter((prevService) => prevService.id == service.id)[0];
                service.tasks.forEach((task) => {
                    if(task.status != previousService?.tasks.filter((prevTask) => prevTask.id == task.id)[0].status) {
                        handleUpdateTaskStatus(task);
                    }      
                })
            })
            setTimeout(() => {
                fetchActivity();
            }, 500)
            
            Toast("Tasks status has been updated.", "success");
        } catch(error) {
            if(error) {
                Toast(error as string, "error");
            }
            else {
                Toast("Failed to update tasks status.", "error");
            } 
        }
    }

    useEffect(() => {
        fetchActivity();
    }, [params.id]);

    if(!activity) return null;

    return (
        userData?.role == "PETSITTER" ?
        <div className="w-full flex flex-col items-start gap-8">
            <h1 className="text-header text-bright-blue">{activity.title}</h1>
            <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                <h3 className="text-subheading text-dark-blue">Pet Activities</h3>
                <div className="flex flex-row justify-between items-center flex-wrap gap-8">
                {
                    activity.services.map((service, index) => {
                            return (
                                <PetActivityCard 
                                    key={index}
                                    service={service}
                                    showCheckBox={true}
                                    showProgressBar={true}
                                    handleTaskUpdated={handleTaskUpdated}
                                    canUpdateTaskStatus={activity.state == "IN_PROGRESS"}
                                />
                            )
                        })
                }
                </div>
                <div className="flex flex-row justify-center">
                    <button 
                        type="button"
                        onClick={onSaveTaskStatusButtonClicked}
                        className="px-8 py-4 flex flex-row justify-center items-center rounded-lg bg-bright-green text-button text-white"
                    >Save</button>
                </div>  
            </div>
            <div className="w-full py-6 px-4 flex flex-col items-start gap-4 border border-bd-gray rounded-lg">
                <h3 className="text-subheading text-dark-blue">New Progress</h3>
                <button className="px-6 py-2 flex flex-row justify-center items-center rounded-lg bg-bright-blue text-button text-white">Upload image</button>
                <div className="h-[250px] flex flex-row gap-8">
                    <Image 
                        src="/Whiskers.jpg"
                        width={850}
                        height={500}
                        alt={"uploaded progress picture"}
                        className="w-[425px] h-[250px] object-cover"
                    />
                    <TextArea 
                        width={"w-[665px]"}
                        height={"h-[250px]"}
                        onChange={() => {}}
                    />
                </div>
                <div className="w-full flex flex-row justify-end gap-4">
                    <button className="px-8 py-4 flex flex-row justify-center items-center rounded-lg bg-bright-green text-button text-white">Submit</button>
                    <button className="px-8 py-4 flex flex-row justify-center items-center border-[2px] border-soft-gray rounded-lg text-body-bold text-soft-gray">Cancel</button>
                </div>
            </div>
        </div>
        :
        <div className="w-[918px] mx-auto flex flex-row justify-between items-start flex-wrap gap-8">
            {
                activity.progresses.map((progress, index) => {
                    return <ActivityProgressCard
                                key={index}
                                progress={progress}
                            />
                })
            }
            {
                    activity.progresses.length == 0 &&
                    <div className="pt-[56px] w-full flex flex-col items-center gap-6">
                        <Image 
                            src={"/match-not-found.svg"}
                            width={300}
                            height={300}
                            alt={"not found"}
                        />
                        <p className="text-center text-soft-gray text-body-paragraph">{"Your pet sitter hasn't made any updates on this activity."}<br />{"Check back soon!"}</p>
                    </div>
                }
        </div> 
    )
}
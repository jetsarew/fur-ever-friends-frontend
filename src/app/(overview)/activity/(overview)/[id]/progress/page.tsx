"use client";

import ActivityProgressCard from "@/components/Card/ActivityProgressCard";
import PetActivityCard from "@/components/Card/PetActivityCard";
import TextArea from "@/components/Input/TextArea";
import { Toast } from "@/components/Toast/Toast";
import { activityService } from "@/services/activity.service";
import { useAppSelector } from "@/store/hooks";
import { ActivityModelResponse, TaskModelResponse } from "@/types/response.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivityProgressPage({ params }: {
    params: { id: string }
}
){
    const [activity, setActivity] = useState<ActivityModelResponse | null>(null);
    const [perviousActivity, setPreviousActivity] = useState<ActivityModelResponse | null>(null);

    const router = useRouter();

    // const [progress, setProgress] = useState<ProgressModelResponse | null>(null);

    const [progressText, setProgressText] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const userData = useAppSelector((state) => state.auth.user);

    const fetchActivity = async () => {
        const response = await activityService.getActivityById(params.id);
        setActivity(response);
        setPreviousActivity(response);
    }

    const fetchProgress = async () => {
        const response = await activityService.getProgressesByActivityId(params.id)
    }

    const onFileUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const uploadedFile = e.target.files[0];
            setFile(uploadedFile);

            // Create and set image preview URL
            const previewUrl = URL.createObjectURL(uploadedFile);
            setImagePreview(previewUrl);
        }
    };

    const handleCancel = () =>{
        setFile(null);
        setProgressText('');
        setImagePreview(null);
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
        const response = await activityService.updateTaskStatus(
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
                fetchProgress();
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
    

    const handleCreateProgress = async () => {

        if (!activity?.id || !file) {
            Toast("Please upload an image and try again.", "error");
            return;
        }
        else if(!activity?.id || !progressText) {
            Toast("Please type the progress content and try again.", "error");
            return;
        }
        
        try {
            await activityService.createProgress(activity.id, {
                progresses: file,
                content: progressText,
            });
            Toast("Progress submitted successfully.", "success");
            fetchActivity(); // Refresh data after submission
            fetchProgress();
            router.back();
        } catch (error) {
            Toast("Failed to submit progress.", "error");
        }
    };

    useEffect(() => {
        fetchActivity();
        fetchProgress();
    }, [params.id]);

    if(!activity) return null;

    return (
        userData?.role == "PETSITTER" ?
        <div className="w-full pb-9 flex flex-col items-start gap-8">
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
                <div className="relative flex items-center justify-center text-white bg-bright-blue rounded-[8px] w-[163px] h-[32px] px-6 text-button cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={onFileUploaded}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        Upload Image
                    </div>
                <div className="h-[250px] flex flex-row gap-8">
                    <Image 
                        src={imagePreview || "/empty-cover-image.svg"}
                        width={425}
                        height={250}
                        alt={"uploaded progress picture"}
                        className={imagePreview ? "w-[425px] h-[250px] object-cover" : "p-4 w-[425px] h-[250px] bg-[#F5F5F5]"}
                        // className="w-[425px] h-[250px] "
                        
                    />
                    <TextArea 
                        width={"w-[665px]"}
                        height={"h-[250px]"}
                        value={progressText}
                        onChange={(e) => setProgressText(e)}/>
                </div>
                <div className="w-full flex flex-row justify-end gap-4">
                    <button 
                        className="px-8 py-4 flex flex-row justify-center items-center rounded-lg bg-bright-green text-button text-white"
                        onClick={handleCreateProgress}
                    >Submit</button>
                    <button 
                        className="px-8 py-4 flex flex-row justify-center items-center border-[2px] border-soft-gray rounded-lg text-body-bold text-soft-gray"
                        onClick={handleCancel}
                    >Cancel</button>
                </div>
            </div>
        </div>
        :
        <div className="w-[918px] mx-auto pb-9 flex flex-row justify-between items-start flex-wrap gap-8">
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
                <div className="w-full pt-[50px] pb-[77px] flex flex-col items-center gap-2">
                    <Image
                      src={"/empty.svg"}
                      width={300}
                      height={300}
                      alt={"empty"}
                    />
                    <p className="text-center text-soft-gray">
                    Awaiting updates from the pet sitter.<br /> Check back soon!
                    </p>
                </div>
            }
        </div> 
    )
}
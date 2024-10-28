"use client";

import ActivityStateBar from "@/components/Card/ActivityStateBar"
import PetActivityCard from "@/components/Card/PetActivityCard"
import { formatUTCDate, hasActivityTerminated } from "@/hooks/useConvertTime";
import { activityService } from "@/services/activity.service"
import PetOwnerCard from "@/components/Card/PetOwnerCard"
import RequestForm from "@/components/Form/RequestForm"
//import PetCard from "@/components/Card/PetCard"
import PetSitterCard from "@/components/Card/PetSitterCard"
import { CalendarIcon, CalendarWithCheckIcon, LocationIcon } from "@/shared/Icon"
import { useAppSelector } from "@/store/hooks";
import { ActivityModelResponse } from "@/types/response.type"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getStatePriority } from "@/hooks/useStatePriority";

export default function ActivityDetailPage({ params }: {
    params: { id: string }
}
){
    const [activity, setActivity] = useState<ActivityModelResponse | null>(null);

    const userData = useAppSelector((state) => state.auth.user);

    useEffect(() => {
        const fetchActivity = async () => {
            const response = await activityService.getActivityById(params.id);
            console.log(response);
            setActivity(response);
        }

        fetchActivity();
    }, [params.id]);

    if(!activity) return null;

    return (
        <div className="flex flex-col items-start gap-8">
            <h1 className="text-header text-bright-blue">{activity.title}</h1>
            <div className="w-full flex flex-row justify-between items-start">
                <div className="w-[561px] flex flex-col gap-8">
                    { userData?.role == "CUSTOMER" && activity.petsitter != null && <PetSitterCard activity={activity} /> }
                    { userData?.role == "PETSITTER" && <PetOwnerCard activity={activity}/> }
                    <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                        <h3 className="text-subheading text-dark-blue">Duration</h3>
                        <div>
                            <div className="pb-2 flex flex-row items-start gap-2 border-b border-bd-gray">
                                <CalendarIcon/>
                                <div className="pt-2 flex flex-col gap-2">
                                    <p className="text-body-bold">Start</p>
                                    <p className="text-small text-soft-gray">{formatUTCDate(activity.startDateTime)}</p>
                                </div>
                            </div>
                            <div className="pt-2 flex flex-row items-start gap-2">
                                <CalendarWithCheckIcon />
                                <div className="pt-2 flex flex-col gap-2">
                                    <p className="text-body-bold">End</p>
                                    <p className="text-small text-soft-gray">{formatUTCDate(activity.endDateTime)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                        <h3 className="text-subheading text-dark-blue">Location</h3>
                        <div>
                            <div className="flex flex-row items-start gap-2">
                                <LocationIcon />
                                <div className="pt-2 flex flex-col gap-2">
                                    <p className="text-body-bold">{activity.pickupPoint}</p>
                                    <p className="text-small-paragraph text-soft-gray">{activity.detail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {(userData?.role == "CUSTOMER" || activity.requests.some((request) => request.petsitter.id == userData?.petsitter?.id) || activity.petsitter?.user.id == userData?.id) && <ActivityStateBar activity={activity}/>}
                {userData?.role == "PETSITTER" && activity.state == "PENDING" && <RequestForm />}
            </div>
            <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                <h3 className="text-subheading text-dark-blue">Pet Activities</h3>
                <div className="flex flex-row justify-between items-center flex-wrap gap-8">
                    {
                        activity.services.map((service, index) => {
                            return (
                                <PetActivityCard 
                                    key={index}
                                    service={service}
                                    showCheckBox={false}
                                    showProgressBar={getStatePriority(activity.state) >= getStatePriority("IN_PROGRESS")}
                                    canUpdateTaskStatus={false}
                                />
                            )
                        })
                    }
                </div>
                {
                    getStatePriority(activity.state) >= getStatePriority("IN_PROGRESS") && !hasActivityTerminated(activity.endDateTime) &&
                    <div
                        className="pt-4 border-t border-bd-gray "
                    >
                        <Link 
                            href={`/activity/${activity.id}/progress`} 
                            className="px-6 py-2 w-fit flex flex-row justify-center items-center rounded-lg bg-bright-blue text-button text-white"
                        >{userData?.role == "CUSTOMER" ? "See progress" : "Update progress"}</Link>
                    </div>
                }
            </div>
            {
                activity.state == "PENDING" &&
                <Link
                    href={`/compose/delete-activity/${activity.id}`}
                    className="px-6 py-4 flex flex-row justify-center items-center rounded-lg border-[2px] border-bright-red text-body-bold text-bright-red"
                >Delete this activity</Link>
            }
            
        </div>
    )
}
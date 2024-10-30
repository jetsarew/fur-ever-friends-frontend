import { LocationIcon } from "@/shared/Icon";
import Image from "next/image";
import ShowRequestButton from "../Button/ShowRequestButton";
import Link from "next/link";
import { Role } from "@/types/user.type";
import { ActivityModelResponse, RequestModelResponse } from "@/types/response.type";
import { getAttachmentSrc } from "@/hooks/useImage";
import { formatUTCDate, hasActivityTerminated, timeUntil } from "@/hooks/useConvertTime";

interface ActivityCardProps{
    role?: Role,
    activity: ActivityModelResponse;
    petSitterRequest?: RequestModelResponse;
}

export default function ActivityCard({ role, activity, petSitterRequest}: ActivityCardProps){
    const profileElement = role == "CUSTOMER" ? 
        <div className="pt-4 flex flex-row justify-between items-end">
            <div className="flex flex-row items-end gap-2">
                <Link href={`/profile/${activity.petsitter?.user.id}`}>
                    <Image 
                        src={activity.petsitter?.user.avatar ? getAttachmentSrc(activity.petsitter?.user.avatar) : "/default_profile.jpg"}
                        width={48}
                        height={48}
                        alt="pet picture"
                        className="w-6 h-6 border-[2px] border-bright-blue rounded-full object-cover"
                    />
                </Link>
                <Link 
                    href={`/profile/${activity.petsitter?.user.id}`}
                    className="text-body-bold text-dark-blue hover:underline"
                >{activity.petsitter?.user.firstname + " " + activity.petsitter?.user.lastname}</Link>
            </div>
            <p className="h-5 text-subheading text-bright-green">{"$" + (activity.price ?? petSitterRequest?.price)}</p>
        </div> :
        <div className="pt-4 flex flex-row justify-between items-end">
            <div className="flex flex-row items-end gap-2">
                <Image 
                    src={activity.customer?.user.avatar ? getAttachmentSrc(activity.customer?.user.avatar) : "/default_profile.jpg"}
                    width={48}
                    height={48}
                    alt="pet picture"
                    className="w-6 h-6 border-[2px] border-bright-blue rounded-full object-cover"
                />
                <p className="text-body-bold text-dark-blue">{activity.customer.user.firstname + activity.customer.user.lastname}</p>
            </div>
            {
                activity.state == "ASSIGNED" || activity.state == "IN_PROGRESS" ?
                <p className="h-5 text-subheading text-bright-green">{"$" + activity.price}</p> :
                activity.state == "PENDING" && <button className="text-body-bold text-soft-gray">Cancel</button>
                
            } 
        </div>;
    
    const topRightElement = role == "CUSTOMER" ? (
        activity.state == "ASSIGNED" ?
        <div className="flex flex-row items-baseline gap-1 text-dark-blue">
            <p className="text-body">start in</p>
            <p className="text-subheading">{timeUntil(activity.startDateTime).diffTime}</p>
            <p className="text-body">{timeUntil(activity.startDateTime).unit}</p>
        </div> : 
        (
            activity.state == "IN_PROGRESS" ?
            (
                hasActivityTerminated(activity.endDateTime) ? 
                <div className="flex flex-row items-baseline gap-1 text-dark-blue">
                    <p className="text-body">Ended</p>
                </div> :
                <div className="flex flex-row items-baseline gap-1 text-dark-blue">
                    <p className="text-body">end in</p>
                    <p className="text-subheading">{timeUntil(activity.endDateTime).diffTime}</p>
                    <p className="text-body">{timeUntil(activity.endDateTime).unit}</p>
                </div>
            )
            :
            <></>
        )
        
    ): (
        activity.state == "ASSIGNED" ?
        <div className="flex flex-row items-baseline gap-1 text-dark-blue">
            <p className="text-body">start in</p>
            <p className="text-subheading">{timeUntil(activity.startDateTime).diffTime}</p>
            <p className="text-body">{timeUntil(activity.startDateTime).unit}</p>
        </div> :
        (
            activity.state == "IN_PROGRESS" ?
            (
                hasActivityTerminated(activity.endDateTime) ? 
                <div className="flex flex-row items-baseline gap-1 text-dark-blue">
                    <p className="text-body">Ended</p>
                </div> :
                <div className="flex flex-row items-baseline gap-1 text-dark-blue">
                    <p className="text-body">end in</p>
                    <p className="text-subheading">{timeUntil(activity.endDateTime).diffTime}</p>
                    <p className="text-body">{timeUntil(activity.endDateTime).unit}</p>
                </div>
            ) :
            <p className="h-5 text-subheading text-bright-green">{"$" + activity.price}</p>
        )
    );

    const bottomElement = role == "CUSTOMER" ? (
        activity.state == "PENDING" ? 
        <ShowRequestButton activityId={activity.id} requests={activity.requests}/> : 
        (
            activity.state == "RETURNING" ?
            <div className="w-full flex flex-row gap-8">
                <Link 
                    href={`/compose/confirm-pet-receipt/${activity.id}`}
                    className="flex-1 px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
                >I have received my pets</Link>
                <Link
                    href={`/compose/missing-pet/${activity.id}`} 
                    className="flex-1 px-6 py-4 flex flex-row justify-center items-center border-[2px] border-bright-red rounded-lg text-body-bold text-bright-red"
                >Report Missing Pet(s)</Link>
            </div> : (
                activity.state == "COMPLETED" && activity.review == null ?
                <Link
                    href={`/activity/${activity.id}/review/${activity.petsitter?.user.id}`}
                    className="w-full px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-golden-yellow"
                >Rate pet sitter</Link> : 
                <></>
            )
        )
    ):
    (
        activity.state == "IN_PROGRESS" && hasActivityTerminated(activity.endDateTime) ?
        <Link
            href={`/compose/confirm-pet-return/${activity.id}`}
            className="w-full px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
        >I have returned all pets</Link>
        :<></>
    );
    
    return (
        <div className="px-4 py-6 flex flex-col gap-4 border border-bd-gray rounded-lg hover:shadow-custom">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <Link
                        href={`/activity/${activity.id}`}
                        className="text-subheading text-bright-blue"
                    >{activity.title}</Link>
                    <div className="flex flex-row gap-1">
                        {
                            activity.services.map((service, index) => {
                                return (
                                    <Image 
                                        key={index}
                                        src={getAttachmentSrc(service.pet.imageUrl)}
                                        width={80}
                                        height={80}
                                        alt="pet picture"
                                        className="w-10 h-10 border-[3px] border-bright-blue rounded-full object-cover"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {topRightElement}
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col">
                    <div className="pb-4 flex flex-row gap-8 border-b border-bd-gray">
                        <div className="w-[308px] flex flex-col items-start gap-2">
                            <p className="text-body-bold">Start</p>
                            <p className="text-body">{formatUTCDate(activity.startDateTime)}</p>
                        </div>
                        <div className="w-[308px] flex flex-col items-start gap-2">
                            <p className="text-body-bold">End</p>
                            <p className="text-body">{formatUTCDate(activity.endDateTime)}</p>
                        </div>
                    </div>
                    <div className={`pt-4 flex flex-row items-end gap-2 ${!(role == "CUSTOMER" && (activity.state == "PENDING" || activity.state == "CANCELLED" || activity.state == "FAILED" || activity.state == "REJECTED")) &&"pb-4 border-b border-bd-gray"}`}>
                        <LocationIcon />
                        <p className="text-body">{activity.pickupPoint}</p>
                    </div>
                    {!(role == "CUSTOMER" && (activity.state == "PENDING" || activity.state == "CANCELLED" || activity.state == "FAILED" || activity.state == "REJECTED")) && profileElement}
                </div>
                {bottomElement}
            </div>
        </div>
    );
}
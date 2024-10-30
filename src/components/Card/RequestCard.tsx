import { getAttachmentSrc } from "@/hooks/useImage";
import { RequestModelResponse } from "@/types/response.type";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

interface RequestCardInterface {
    request: RequestModelResponse;
    activityId: string;
    border: string;
}

export default function RequestCard({ request, activityId, border }: RequestCardInterface) {
    return (
        <div className={`w-full px-4 py-6 flex flex-col gap-4 ${border}`}>
            <div className="flex flex-row gap-4">
                <Link href={`/profile/${request.petsitter?.user.id}`}>
                    <Image
                        src={request.petsitter.user.avatar ? getAttachmentSrc(request.petsitter.user.avatar) : "/default_profile.jpg"}
                        width={250}
                        height={250}
                        alt={"pet sitter profile"}
                        className="w-[125px] h-[125px] rounded-lg object-cover"
                    />
                </Link>
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center">
                        <Link 
                            href={`/profile/${request.petsitter?.user.id}`} 
                            className="text-subheading hover:underline"
                        >{request.petsitter.user.firstname + " " + request.petsitter.user.lastname}</Link>
                        <p className="text-subheading2 text-dark-blue">{`$${request.price}`}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-small-paragraph text-standard-gray">{request.message}</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row items-end gap-1">
                                <StarIcon className="w-5 h-5 text-golden-yellow" />
                                <div className="flex flex-row items-baseline ap-[2px]">
                                    <p className="text-subheading2 text-golden-yellow">4.5</p>
                                    <p className="text-body text-soft-gray">{"(99)"}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-baseline gap-1">
                                <p className="text-subheading2 text-bright-blue">200</p>
                                <p className="text-[14px] font-normal leading-[100%]">Activities done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <Link 
                    href={`/activity/${activityId}/payment/${request.id}`}
                    className="flex-1 px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
                >Accept</Link>
                <button className="flex-1 px-6 py-4 flex flex-row justify-center items-center border-[2px] border-bright-red rounded-lg text-body-bold text-bright-red">Reject</button>
            </div>
        </div>
    );
}
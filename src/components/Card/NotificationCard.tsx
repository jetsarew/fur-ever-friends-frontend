import { DotIcon } from "@/shared/Icon";
import { NotificationModelResponse } from "@/types/response.type";
//import Image from "next/image";
import Link from "next/link";
interface NotificationCardProps {
    clickHandler: () => void,
    notification: NotificationModelResponse
}
export default function NotificationCard({ clickHandler, notification }: NotificationCardProps){
    return (
        <div
            className="w-full px-6 py-4 flex flex-row gap-4 border-b border-bd-gray hover:bg-[#F8F8F8] hover:cursor-pointer"
            onClick={clickHandler}
        >
            {/* <Image 
                src="/profile.jpg"
                width={80}
                height={80}
                alt="profile image"
                className="w-10 h-10 rounded-full object-cover"
            /> */}
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-row flex-wrap gap-1 items-baseline">
                    <p className="text-small-bold text-dark">{notification.title}</p>
                    <span className="text-small-paragraph text-standard-gray">{notification.content}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-small text-soft-gray">December 31, 2024</span>
                    <span><DotIcon /></span>
                    <span className="text-small text-soft-gray">11:59 AM</span>
                </div>
            </div>
        </div>
    );
}
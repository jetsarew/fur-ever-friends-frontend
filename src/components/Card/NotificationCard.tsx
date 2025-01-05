import { DotIcon } from "@/shared/Icon";
import { NotificationModelResponse } from "@/types/response.type";
import Link from "next/link";
interface NotificationCardProps {
    clickHandler: () => void,
    notification: NotificationModelResponse
}
export default function NotificationCard({ clickHandler, notification }: NotificationCardProps) {
    function formatDateAndTime(inputDate: string): string[] {
        const date = new Date(inputDate);

        const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', dateOptions);

        const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

        return [formattedDate, formattedTime];
    }

    const [formattedDate, formattedTime] = formatDateAndTime(notification.createdAt);
    const activityId = notification.content.split("\n")[2];
    console.log(activityId);
    return (
        <div
            className="w-full px-6 py-4 flex flex-row gap-4 border-b border-bd-gray hover:bg-[#F8F8F8] hover:cursor-pointer"
            onClick={clickHandler}
        >
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-row flex-wrap gap-1 items-baseline">
                    <p className="text-small-bold text-dark">{notification.title}</p>
                    {
                        notification.title === "Activity Invitation" ?
                            (<>
                                <span className="text-small-paragraph text-standard-gray">You have a new activity invitation.</span>
                                <Link href={`/activity/${notification.content.split("\n")[1]}`} className="text-small-paragraph text-standard-gray">Click to view.</Link>
                            </>)
                            :
                            <span className="text-small-paragraph text-standard-gray">{notification.content}</span>
                    }
                </div>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-small text-soft-gray">{formattedDate}</span>
                    <span><DotIcon /></span>
                    <span className="text-small text-soft-gray">{formattedTime}</span>
                </div>
            </div>
        </div>
    );
}
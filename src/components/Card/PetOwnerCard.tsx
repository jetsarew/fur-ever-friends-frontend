import { getAttachmentSrc } from "@/hooks/useImage";
import { getStatePriority } from "@/hooks/useStatePriority";
import { BillIcon, PhoneIcon, WarningIcon } from "@/shared/Icon";
import { ActivityModelResponse } from "@/types/response.type";
import Image from "next/image";
import Link from "next/link";

interface PetOwnerCardInterface {
    activity: ActivityModelResponse;
  }

export default function PetOwnerCard({ activity }: PetOwnerCardInterface) {
    return (
        <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <h3 className="text-subheading text-dark-blue">Pet Owner</h3>
                {
                    getStatePriority(activity.state) >= getStatePriority("ASSIGNED") &&
                    <Link
                        href={`/activity/${activity.id}/report/${activity.customer?.user.id}`}
                    >
                        <WarningIcon />
                    </Link>
                } 
            </div>
            <div>
                <div className={`${(activity.state != "PENDING") && "pb-3"} flex flex-row items-center gap-4`}>
                <Image
                    src={activity.customer?.user.avatar ? getAttachmentSrc(activity.customer.user.avatar) : "/default_profile.jpg"}
                    width={150}
                    height={150}
                    alt={"pet sitter profile picture"}
                    className="w-[75px] h-[75px] border-[3px] border-bright-blue rounded-full object-cover"
                />
                <div className="flex flex-col justify-center items-start gap-2">
                    <p className="text-subheading">{activity.customer.user.firstname + " " + activity.customer.user.lastname}</p>
                    <div className="flex flex-row items-end gap-2">
                        <PhoneIcon />
                        <p className="text-body-bold">{activity.customer.user.phone}</p>
                    </div>
                </div>
                    <p className="text-subheading">{}</p>
                </div>
                {
                    (activity.state != "PENDING") && 
                    <div className="pt-3 flex flex-row justify-between items-baseline border-t border-bd-gray">
                        <div className="flex flex-row items-baseline gap-2">
                            <BillIcon />
                            <p className="text-body-bold">Service fee</p>
                        </div>
                        <p className="text-subheading text-bright-green">{`$${activity.price}`}</p>
                    </div>
                }
            </div>
        </div>
    );
}

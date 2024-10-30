import { getAttachmentSrc } from "@/hooks/useImage";
import { BillIcon, PhoneIcon, WarningIcon } from "@/shared/Icon";
import { ActivityModelResponse } from "@/types/response.type";
import Image from "next/image";
import Link from "next/link";

interface PetSitterCardInterface {
  activity: ActivityModelResponse;
}

export default function PetSitterCard({ activity }: PetSitterCardInterface) {
  return (
    <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-subheading text-dark-blue">Pet Sitter</h3>
        <Link
          href={`/activity/${activity.id}/report/${activity.petsitter?.user.id}`}
        >
          <WarningIcon />
        </Link>
      </div>
      <div>
        <div className="pb-3 flex flex-row gap-4 border-b border-bd-gray">
          <Link href={`/profile/${activity.petsitter?.user.id}`}>
            <Image
              src={activity.petsitter?.user.avatar ? getAttachmentSrc(activity.petsitter.user.avatar) : "/default_profile.jpg"}
              width={150}
              height={150}
              alt={"pet sitter profile picture"}
              className="w-[75px] h-[75px] border-[3px] border-bright-blue rounded-full object-cover"
            />
          </Link>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link 
              href={`/profile/${activity.petsitter?.user.id}`}
              className="text-subheading hover:underline"
            >{activity.petsitter?.user.firstname + " " + activity.petsitter?.user.lastname}</Link>
            <div className="flex flex-row items-end gap-2">
              <PhoneIcon />
              <p className="text-body-bold">{activity.petsitter?.user.phone}</p>
            </div>
          </div>
        </div>
        <div className="pt-3 flex flex-row justify-between items-baseline">
          <div className="flex flex-row items-baseline gap-2">
            <BillIcon />
            <p className="text-body-bold">Service fee</p>
          </div>
          <p className="text-subheading text-bright-green">{`$${activity.price}`}</p>
        </div>
      </div>
    </div>
  );
}

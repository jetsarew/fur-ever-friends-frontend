import { BillIcon } from "@/shared/Icon";
import { ActivityModelResponse } from "@/types/response.type";
import Image from "next/image";

interface PetOwnerCardInterface {
    activity: ActivityModelResponse;
  }

export default function PetOwnerCard({ activity }: PetOwnerCardInterface) {
    const state = "Unassigned";
    return (
        <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <h3 className="text-subheading text-dark-blue">Pet Owner</h3>
                {/* <button>
                <WarningIcon />
                </button> */}
            </div>
            <div>
                <div className={`${(state != "Unassigned") && "pb-3"} flex flex-row items-center gap-4`}>
                <Image
                    src="/profile.jpg"
                    width={150}
                    height={150}
                    alt={"pet sitter profile picture"}
                    className="w-[75px] h-[75px] border-[3px] border-bright-blue rounded-full object-cover"
                />
                    <p className="text-subheading">{activity.customer.user.firstname + " " + activity.customer.user.lastname}</p>
                </div>
                {
                    (state != "Unassigned") && 
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

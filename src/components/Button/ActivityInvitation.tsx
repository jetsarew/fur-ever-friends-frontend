"use client";

import { ActivityModelResponse } from "@/types/response.type";
import { useState } from "react";
import { Toast } from "../Toast/Toast";
import { activityService } from "@/services/activity.service";

interface ActivityInvitationInterface {
    activity: ActivityModelResponse;
    petSitterId: string;
}

export default function ActivityInvitation({ activity, petSitterId }: ActivityInvitationInterface){
    const [invited, setInvited] = useState<boolean>(false);

    const onButtonClicked = async () => {
        if(invited == false) {
            try {
                await activityService.invitePetSitter(activity.id, {
                    petsitterId: petSitterId,
                })
            } catch(error) {
                Toast("Failed to invite pet sitter to this activity.", "error");
            }
        }
        setInvited(true);
    }
    return (
        <div className="w-full px-6 py-3 flex flex-row justify-between items-center hover:bg-[#F8F8F8]">
            <p className="text-body">{activity.title}</p>
            <button 
                type="button"
                onClick={onButtonClicked}
                className={`px-6 py-2 flex flex-row justify-center items-center rounded-lg ${invited ? "text-body-bold text-soft-gray" : "text-button text-white bg-bright-blue"}`}
            >{invited ? "Invited" : "Invite"}</button>
        </div>
    );
}
"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { InviteIcon } from "@/shared/Icon"
import { useRef, useState } from "react";
import ActivityInvitation from "./ActivityInvitation";
import { ActivityModelResponse } from "@/types/response.type";
import Image from "next/image";

interface InviteButtonInterface {
    activities: ActivityModelResponse[];
    petSitterId: string;
}

export default function InviteButton({ activities, petSitterId }: InviteButtonInterface){
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    const onButtonClicked = () => {
        setShow(!show);
    }

    return (
        <div className="relative">
            <div
                ref={buttonRef}
                onClick={onButtonClicked}
                className="h-12 px-6 py-4 flex flex-row justify-center items-center gap-2 rounded-lg text-button text-white bg-bright-blue hover:cursor-pointer"
            >
                <InviteIcon />
                <p>Invite</p>
            </div>
            {
                show &&
                <div 
                    ref={popUpRef}
                    className="w-[404px] max-h-[300px] overflow-y-auto flex flex-col items-start border border-bd-gray rounded-xl pop-up-shadow bg-white absolute bottom-[100%] -right-1 overflow-hidden"
                >
                    {
                        activities.map((activity, index) => {
                            return <ActivityInvitation key={index} activity={activity} petSitterId={petSitterId}/>
                        })
                    }
                    {
                        activities.length == 0 && 
                        <div className="py-6 w-full flex flex-col justify-center items-center gap-4">
                            <Image
                                src={"/empty.svg"}
                                width={150}
                                height={150}
                                alt={"empty cover image"}
                            />
                            <p className="text-body text-center text-soft-gray">
                                You currently have no activities.<br /> Start by adding a new one!
                            </p>
                        </div>
                        
                    }
                </div>
            }
        </div>
    );
}
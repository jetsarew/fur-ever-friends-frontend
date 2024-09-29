"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { InviteIcon } from "@/shared/Icon"
import { useRef, useState } from "react";
import ActivityInvitation from "./ActivityInvitation";

export default function InviteButton(){
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
                className="h-12 px-6 py-4 flex flex-row justify-center items-center gap-2 rounded-lg text-button text-white bg-bright-blue"
            >
                <InviteIcon />
                <p>Invite</p>
            </div>
            {
                show &&
                <div 
                    ref={popUpRef}
                    className="w-[404px] flex flex-col items-start border border-bd-gray rounded-xl pop-up-shadow bg-white absolute bottom-0 -right-1 overflow-hidden"
                >
                    <ActivityInvitation />
                    <ActivityInvitation />
                    <ActivityInvitation />
                </div>
            }
        </div>
    );
}
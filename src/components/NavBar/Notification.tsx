"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { BellIcon } from "@/shared/Icon";
import NotificationCard from "../Card/NotificationCard";

export default function Notification(){
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    return (
        <div className="relative">
            <div 
                ref={buttonRef}
                className="hover:cursor-pointer"
                onClick={() => setShow(true)}
            >
                <BellIcon />
            </div>
            {
                show && 
                <div 
                    ref={popUpRef}
                    className="w-[369px] flex flex-col items-start border border-bd-gray rounded-lg pop-up-shadow bg-white absolute top-[47px] right-0"
                >
                    <NotificationCard clickHandler={() => setShow(false)}/>
                    <NotificationCard clickHandler={() => setShow(false)}/>
                    <NotificationCard clickHandler={() => setShow(false)}/>
                    <NotificationCard clickHandler={() => setShow(false)}/>
                </div>
            }
        </div>
    );
}
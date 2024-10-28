"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import RequestCard from "../Card/RequestCard";
import { RequestModelResponse } from "@/types/response.type";

interface ShowRequestButtonInterface {
    requests: RequestModelResponse[];
    activityId: string;
}

export default function ShowRequestPopUpButton({ activityId, requests }: ShowRequestButtonInterface) {
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    if(requests.length == 0) return null;

    return (
        <div className="relative">
            <div
                ref={buttonRef}
                onClick={() => setShow(!show)}
                className={`px-6 py-2 rounded-lg bg-bright-blue text-button text-white hover:cursor-pointer ${show ? "bg-dark-blue" : "bg-bright-blue"}`}
            >
                {show ? "Hide all" : "See all request"}
            </div>
            {
                show && 
                <div
                    ref={popUpRef}
                    className="absolute w-[640px] max-h-[500px] top-[100%] right-0 flex flex-col border border-bd-gray rounded-lg bg-white shadow-custom overflow-y-auto"
                >
                    {
                        requests.map((request, index) => {
                            return <RequestCard key={index} activityId={activityId} request={request} border="border-b border-bd-gray hover:bg-[#F8F8F8]"/>
                        })
                    }
                    {
                        requests.map((request, index) => {
                            return <RequestCard key={index} activityId={activityId} request={request} border="border-b border-bd-gray hover:bg-[#F8F8F8]"/>
                        })
                    }
                </div>
            }
        </div>
    );
}
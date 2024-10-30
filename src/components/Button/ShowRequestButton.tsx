"use client";
import { useState } from "react";
import RequestCard from "../Card/RequestCard";
import { RequestModelResponse } from "@/types/response.type";

interface ShowRequestButtonInterface {
    requests: RequestModelResponse[];
    activityId: string;
}

export default function ShowRequestButton({ activityId, requests }: ShowRequestButtonInterface) {
    const [clicked, setClicked] = useState<boolean>(false);

    const onButtonClicked = () => {
        setClicked(!clicked);
    }

    if (requests.length == 0) return null;

    return (
        <div className="w-full flex flex-col items-start gap-4">
            <button
                onClick={onButtonClicked}
                className={`px-6 py-2 flex flex-row justify-center items-center rounded-lg text-button text-white ${clicked ? "bg-dark-blue" : "bg-bright-blue"}`}
            >{clicked ? "Hide all" : "View all request"}</button>
            {
                clicked &&
                <div className="w-full flex flex-col gap-4">
                    {
                        requests.map((request, index) => {
                            return <RequestCard key={index} activityId={activityId} request={request} border="border border-bd-gray rounded-lg" />
                        })
                    }
                </div>
            }
        </div>
    );
}
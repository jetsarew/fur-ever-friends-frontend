"use client";
import { useState } from "react";
import RequestCard from "../Card/RequestCard";

export default function ShowRequestButton(){
    const [clicked, setClicked] = useState<boolean>(false);

    const onButtonClicked = () => {
        setClicked(!clicked);
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <button 
                onClick={onButtonClicked}
                className={`px-6 py-2 flex flex-row justify-center items-center rounded-lg text-button text-white ${clicked ? "bg-dark-blue" : "bg-bright-blue"}`}
            >{clicked ? "Hide all" : "View all request"}</button>
            {
                clicked && 
                <div className="flex flex-col gap-4">
                    <RequestCard />
                    <RequestCard />
                </div>
            } 
        </div>
    );
}
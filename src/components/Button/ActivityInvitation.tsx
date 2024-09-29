"use client";

import { useState } from "react";

export default function ActivityInvitation(){
    const [invited, setInvited] = useState<boolean>(false);


    const onButtonClicked = () => {
        setInvited(true);
    }

    return (
        <div className="w-full px-6 py-3 flex flex-row justify-between items-center hover:bg-[#F8F8F8]">
            <p className="text-body">Whiskers & Buddy Outing</p>
            <button 
                type="button"
                onClick={onButtonClicked}
                className={`px-6 py-2 flex flex-row justify-center items-center rounded-lg ${invited ? "text-body-bold text-soft-gray" : "text-button text-white bg-bright-blue"}`}
            >Invite</button>
        </div>
    );
}
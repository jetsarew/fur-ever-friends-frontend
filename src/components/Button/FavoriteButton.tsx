"use client";

import { PawFilledIcon, PawIcon } from "@/shared/Icon"
import { useState } from "react";

export default function FavoriteButton(){
    const [favorite, setFavorite] = useState<boolean>(false);

    const onButtonClicked = () => {
        setFavorite(!favorite);
    }

    return (
        <button
            type="button"
            onClick={onButtonClicked}
            className={`h-12 flex-1 py-4 flex flex-row justify-center items-center gap-2 rounded-lg text-button ${favorite ? "text-white bg-bright-green" : "text-bright-green bg-white border-[2px] border-bright-green"}`}
        >
            {
                favorite ? 
                <PawFilledIcon /> :
                <PawIcon />
            }
            
            <p>Favorite</p>
        </button>
    );
}
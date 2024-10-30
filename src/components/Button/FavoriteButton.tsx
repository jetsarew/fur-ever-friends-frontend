"use client";

import { PawFilledIcon, PawIcon } from "@/shared/Icon"

interface FavoriteButtonInterface {
    isAdded: boolean;
    onFavoriteButtonClick: (isAdded: boolean, favoriteId?: string) => void;
}

export default function FavoriteButton({ isAdded, onFavoriteButtonClick }: FavoriteButtonInterface){
    return (
        <button
            type="button"
            onClick={() => onFavoriteButtonClick(isAdded)}
            className={`h-12 flex-1 py-4 flex flex-row justify-center items-center gap-2 rounded-lg text-button ${isAdded ? "text-white bg-bright-green" : "text-bright-green bg-white border-[2px] border-bright-green"}`}
        >
            {
                isAdded ? 
                <PawFilledIcon /> :
                <PawIcon />
            }
            
            <p>Favorite</p>
        </button>
    );
}
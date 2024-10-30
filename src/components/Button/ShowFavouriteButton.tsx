"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import {  FavoriteModelResponse } from "@/types/response.type";
import Image from "next/image";
import FavoriteEntry from "./FavoriteEntry";

interface ShowFavoriteButton {
    activityId: string;
    favorites: FavoriteModelResponse[];
}

export default function ShowFavoriteButton({ activityId, favorites }: ShowFavoriteButton){
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
                onClick={() => setShow(!show)}
                className={`px-6 py-2 rounded-lg bg-bright-blue text-button text-white hover:cursor-pointer ${show ? "bg-dark-blue" : "bg-bright-blue"}`}
            >
                Favorites
            </div>
            {
                show &&
                <div 
                    ref={popUpRef}
                    className="w-[404px] max-h-[300px] overflow-y-auto flex flex-col items-start border border-bd-gray rounded-xl pop-up-shadow bg-white absolute top-[100%] -right-1 overflow-hidden z-[2]"
                >
                    {
                        favorites.map((favorite, index) => {
                            return <FavoriteEntry key={index} favorite={favorite} activityId={activityId}/>
                        })
                    }
                    {
                        favorites.length == 0 && 
                        <div className="py-6 w-full flex flex-col justify-center items-center gap-4">
                            <Image
                                src={"/empty.svg"}
                                width={150}
                                height={150}
                                alt={"empty cover image"}
                            />
                            <p className="text-body text-center text-soft-gray">
                                You currently have no pet sitter in favorites.
                            </p>
                        </div>
                        
                    }
                </div>
            }
        </div>
    );
}
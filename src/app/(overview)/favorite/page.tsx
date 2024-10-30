"use client";

import PetSitterSearchCard from "@/components/Card/PetSitterSearchCard";
import { favoriteService } from "@/services/favorite.service";
import { FavoriteModelResponse } from "@/types/response.type";
import { useEffect, useState } from "react";

export default function FavoritePage(){
    const [favorites, setFavorites] = useState<FavoriteModelResponse[]>([]);
    const getFavorites = async () => {
        try {
            const response = await favoriteService.getMyFavorite();
            console.log(response);
            setFavorites(response);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        getFavorites();
    }, [])

    return (
        <div className="flex flex-col gap-8">
            <h1 className="pt-9 pb-4 border-b border-bd-gray text-subheading text-dark-blue sticky top-[63px] bg-white">Favorite Pet Sitters</h1>
            <div className="flex flex-row items-start justify-start flex-wrap gap-8">
                {
                    favorites.map((favorite, index) => {
                        return <PetSitterSearchCard key={index} petSitter={favorite.petsitter}/>
                    })
                }
            </div>
        </div>
    );
}
"use client";

import PetSitterSearchCard from "@/components/Card/PetSitterSearchCard";
import { favoriteService } from "@/services/favorite.service";
import { FavoriteModelResponse } from "@/types/response.type";
import { useEffect, useState } from "react";

export default function FavoritePage(){
    const [favorites, setFavorites] = useState<FavoriteModelResponse[]>([]);

    const getFavorites = async () => {
        try {
            const response:FavoriteModelResponse[] = await favoriteService.getMyFavorite();
            ;
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
                        return <PetSitterSearchCard 
                            key={index} 
                            userId={favorite.petsitter.user.id} 
                            name={favorite.petsitter.user.firstname + " " + favorite.petsitter.user.lastname} 
                            rating={favorite.petsitter.rating} 
                            avatar={favorite.petsitter.user.avatar}
                            taskDone={favorite.petsitter.activities.filter((activity) => activity.state == "COMPLETED").length}
                        />
                    })
                }
            </div>
        </div>
    );
}
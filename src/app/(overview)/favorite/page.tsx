"use client";

import PetSitterSearchCard from "@/components/Card/PetSitterSearchCard";
import { favoriteService } from "@/services/favorite.service";
import { userService } from "@/services/user.service";
import { FavoriteModelResponse } from "@/types/response.type";
import { CommonUserModel } from "@/types/user.type";
import { useEffect, useState } from "react";

export default function FavoritePage(){
    const [petSitters, setPetSitters] = useState<CommonUserModel[]>([]);

    const getFavorites = async () => {
        try {
            const response:FavoriteModelResponse[] = await favoriteService.getMyFavorite();
            console.log(response);
            const response2 = await userService.getPetSitter();
            setPetSitters(response2.filter((petSitter) => response.some((favorite) => favorite.petsitter.user.id == petSitter.id)));
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
                    petSitters.map((petSitter, index) => {
                        return <PetSitterSearchCard key={index} userId={petSitter.id} name={petSitter.firstname + " " + petSitter.lastname} rating={petSitter.petsitter?.rating} avatar={petSitter.avatar}/>
                    })
                }
            </div>
        </div>
    );
}
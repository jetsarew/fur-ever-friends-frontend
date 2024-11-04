"use client";

import PetSitterSearchCard from "@/components/Card/PetSitterSearchCard";
import InputField from "@/components/Input/InputField";
import { userService } from "@/services/user.service";
import { FilterIcon } from "@/shared/Icon";
import { CommonUserModel } from "@/types/user.type";
import { useEffect, useState } from "react";

export default function FeedPage(){
    const [petSitters, setPetSitters] = useState<CommonUserModel[]>([]);

    useEffect(() => {
        const fetchPetSitters = async () => {
            try {
                const response = await userService.getPetSitter();
                console.log(response);
                setPetSitters(response);
            } catch(error) {

            }
        }

        fetchPetSitters();
    }, [])

    return (
        <div className="flex flex-col gap-8">
            <div className="pt-9 pb-4 flex flex-row items-center gap-4 sticky top-[63px] border-b border-bd-gray  bg-white">
                <InputField 
                    type="text"
                    width="flex-1"
                    height="h-12"
                    onChange={() => {}}
                />
                <FilterIcon />
            </div>
            <div className="pb-9 flex flex-row items-start justify-start flex-wrap gap-8">
                {
                    petSitters.map((petSitter, index) => {
                        return <PetSitterSearchCard key={index} userId={petSitter.id} name={petSitter.firstname + " " + petSitter.lastname} rating={petSitter.petsitter?.rating} avatar={petSitter.avatar} taskDone={petSitter.petsitter?.activities.filter((activity) => activity.state == "COMPLETED").length ?? 0}/>
                    })
                }
            </div>
            
        </div>
    )
}
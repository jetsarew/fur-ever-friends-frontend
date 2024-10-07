"use client";

import PetSitterSearchCard from "@/components/Card/PetSitterSearchCard";
import InputField from "@/components/Input/InputField";
import { FilterIcon } from "@/shared/Icon";

export default function FeedPage(){
    return (
        <div className="flex flex-col gap-8">
            <div className="pt-9 pb-4 flex flex-row items-center gap-4 sticky top-[64px] border-b border-bd-gray  bg-white">
                <InputField 
                    type="text"
                    width="flex-1"
                    height="h-12"
                    onChange={(s: string) => {console.log(s)}}
                />
                <FilterIcon />
            </div>
            <div className="flex flex-row items-start justify-start flex-wrap gap-8">
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />   
            </div>
            
        </div>
    )
}
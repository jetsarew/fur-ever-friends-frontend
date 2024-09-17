"use client";

import TextArea from "@/components/Input/TextArea";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";

export default function ActivityReviewPage({ params }: {
    params: { id: string }
}
){
    const [rating, setRating] = useState<number>(1);

    console.log(params.id);

    return (
        <div className="w-[680px] mx-auto flex flex-col items-center gap-8">
            <div className="w-full flex flex-col items-start gap-8">
                <div className="flex flex-row items-center gap-4">
                    <Image 
                        src="/pet-sitter.jpg"
                        width={120}
                        height={120}
                        alt={"pet sitter profile"}
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-bright-blue object-cover"
                    />
                    <p className="text-subheading text-bright-blue">Kirana Jasmine Chewter</p>
                </div>
                <div className="w-full flex flex-row justify-center gap-5">
                    <button
                        onClick={() => setRating(1)}
                    >
                        <StarIcon className="w-[60px] h-[60px] text-golden-yellow"/>
                    </button>
                    <button
                        onClick={() => setRating(2)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${rating >= 2 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                    <button
                        onClick={() => setRating(3)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${rating >= 3 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                    <button
                        onClick={() => setRating(4)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${rating >= 4 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                    <button
                        onClick={() => setRating(5)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${rating >= 5 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                </div>
            </div>
            <TextArea 
                label={"Share more about your experience"}
                width={"w-full"}
                height={"h-[136px]"}
                onChange={() => {}}
            />
            <button className="px-6 py-4 flex flex-row justify-between items-center rounded-lg text-button text-white bg-golden-yellow">Post review</button>
        </div>
    )
}
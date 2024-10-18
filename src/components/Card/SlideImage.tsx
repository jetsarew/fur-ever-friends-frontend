"use client";
import Image from "next/image";
import { useState } from "react";

export default function SlideImage(){
    const [count, setCount] = useState<number>(0);

    const images = [
        "/cover1.jpg",
        "/cover2.jpg",
        "/cover3.jpg"
    ];

    const onImageClicked = () => {
        setCount((count + 1) % images.length);
    }
    return (
        <div 
            className="flex flex-row justify-center bg-[#F5F5F5] hover:cursor-pointer"
            onClick={onImageClicked}
        >
            <Image 
                src={images[count]}
                height={732}
                width={584}
                alt="cover image"
                className="w-full h-[366px] object-contain"
            />
        </div>
    );
}
"use client";
import { getAttachmentSrc } from "@/hooks/useImage";
import Image from "next/image";
import { useState } from "react";

interface SlideImageInterface {
    coverImages: string[]
}

export default function SlideImage({ coverImages }: SlideImageInterface){
    const [count, setCount] = useState<number>(0);

    const onImageClicked = () => {
        setCount((count + 1) % coverImages.length);
    }

    if(coverImages.length == 0){
        return null;
    }

    return (
        <div 
            className="flex flex-row justify-center bg-[#F5F5F5] hover:cursor-pointer"
            onClick={onImageClicked}
        >
            <Image 
                src={getAttachmentSrc(coverImages[count])}
                height={732}
                width={584}
                alt="cover image"
                className="w-full h-[366px] object-contain"
            />
        </div>
    );
}
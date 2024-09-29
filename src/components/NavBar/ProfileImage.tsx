"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ProfileImage(){

    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    const onLogOutButtonClicked = () => {
        setShow(false);
    }

    return (
        <div className="relative">
            <div ref={buttonRef}>
                <Image 
                    src={"/profile.jpg"}
                    width={144}
                    height={144}
                    alt={"profile image"}
                    className="w-12 h-12 rounded-full object-cover hover:cursor-pointer"
                    onClick={() => setShow(true)}
                />
            </div>
            {
                show && 
                <div 
                    ref={popUpRef}
                    className="w-[220px] flex flex-col items-start border border-bd-gray rounded-lg pop-up-shadow bg-white absolute top-[55px] right-0"
                >
                    <div className="w-full px-6 py-4 flex flex-col items-start gap-2 border-b border-bd-gray">
                        <p className="text-body">Anntonia Porsild</p>
                        <p className="text-small text-standard-gray">porsild@gmail.com</p>
                    </div>
                    <Link
                        href="/profile/edit"
                        className="w-full px-6 py-3 hover:bg-[#F8F8F8]"
                        onClick={() => setShow(false)}
                    >Edit profile</Link>
                    <Link
                        href="/profile/edit"
                        className="w-full px-6 py-3 hover:bg-[#F8F8F8]"
                        onClick={() => setShow(false)}
                    >Favorite pet sitter</Link> 
                    <button 
                        type="button"
                        className="w-full px-6 py-3 text-left hover:bg-[#F8F8F8]"
                        onClick={onLogOutButtonClicked}
                    >Log out</button>
                </div>
            }    
        </div>
    );
}
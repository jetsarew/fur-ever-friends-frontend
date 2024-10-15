"use client";

import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

export default function LandingPageButton() {
    const userData = useAppSelector((state) => state.auth.user);

    if(userData && userData.role == "ADMIN") return null;

    return (
        <Link 
            href={userData ? (userData.role == "CUSTOMER" ? "/activity/create" : "/search") : "/auth/login"}
            className="px-[24px] py-[16px] text-button text-white bg-bright-blue rounded-lg"
        >
            {userData ? (userData.role == "CUSTOMER" ? "Start a New Activity" : "Explore Pet Sitting Tasks") : "Join now"}
        </Link>
    );
}
"use client";

import Link from "next/link";
import ProfileImage from "./ProfileImage";
import Notification from "./Notification";
import { useAppSelector } from "@/store/hooks";

export default function NavBar(){
    const userData = useAppSelector((state) => state.auth.user)
    console.log(userData);

    return (
        <div className="fixed top-0 left-0 right-0 w-full h-16 px-[111px] flex flex-row justify-between items-center border-b border-bd-gray bg-white z-10">
            <Link href={"/"} className="text-header text-bright-blue">FUR-EVER FRIENDS</Link>
            {
                userData ?
                <div className="flex flex-row justify-between gap-[102px]">
                    {
                        userData.role == "CUSTOMER" &&
                        <div className="flex flex-row items-center gap-6 color text-button text-medium-gray">
                            <Link
                                href="/find-pet-sitter"
                            >Find a pet sitter</Link>
                            <Link
                                href="/activity"
                            >Activities</Link>
                            <Link
                                href="/pet"
                            >My pets</Link>
                            <Notification />
                        </div>
                    }
                    {
                        userData.role == "PETSITTER" &&
                        <div className="flex flex-row items-center gap-6 color text-button text-medium-gray">
                            <Link
                                href="/search"
                            >Browse activities</Link>
                            <Link
                                href="/activity"
                            >My tasks</Link>
                            <Notification />
                        </div>
                    }
                    {
                        userData.role == "ADMIN" &&
                        <div className="flex flex-row items-center gap-6 color text-button text-medium-gray">
                            <Link
                                href="/users"
                            >Manage users</Link>
                            <Link
                                href="/reports"
                            >View reports</Link>
                            <Link
                                href="/applications"
                            >Pet sitter applications</Link>
                            <Notification />
                        </div>
                    }
                    <ProfileImage/>
                </div> :
                <div className="flex flex-row justify-between items-center gap-[29px]">
                    <Link
                        href="/auth/login"
                        className="text-button text-bright-blue"
                    >Log in</Link>
                    <Link
                        href="/auth/signup/pet-owner"
                        className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-blue"
                    >Join now</Link> 
                </div>
            }
        </div>
    )
}
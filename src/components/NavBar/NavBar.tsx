import Link from "next/link";
import ProfileImage from "./ProfileImage";
import { BellIcon } from "@/shared/Icon";
import Notification from "./Notification";

export default function NavBar(){
    let state = "users";
    let role = "pet owner";

    state = "users";
    role = "pet owner";

    return (
        <div className="fixed top-0 left-0 right-0 w-full h-16 px-[111px] flex flex-row justify-between items-center border-b border-bd-gray bg-white">
            <Link href={"/"} className="text-header text-bright-blue">FUR-EVER FRIENDS</Link>
            {
                state == "users" ?
                <div className="flex flex-row justify-between gap-[102px]">
                    {
                        role == "pet owner" &&
                        <div className="flex flex-row items-center gap-6 color text-button text-medium-gray">
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
                        role == "pet sitter" &&
                        <div className="flex flex-row items-center gap-6 color text-button text-medium-gray">
                            <Link
                                href="/search"
                            >Browse activities</Link>
                            <Link
                                href="/activity"
                            >My tasks</Link>
                            <BellIcon />
                        </div>
                    }
                    {
                        role == "admin" &&
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
                            <BellIcon />
                        </div>
                    }
                    <ProfileImage />
                </div> :
                <div className="flex flex-row justify-between items-center gap-[29px]">
                    <Link
                        href="/"
                        className="text-button text-bright-blue"
                    >Log in</Link>
                    <Link
                        href="/"
                        className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-blue"
                    >Join now</Link> 
                </div>
            }
        </div>
    )
}
import { LocationIcon } from "@/shared/Icon";
import Image from "next/image";
import ShowRequestButton from "../Button/ShowRequestButton";
import Link from "next/link";
import { Role } from "@/types/user.type";

type activityState = "Unassigned" | "Assigned" | "In progress" | "Returning" | "Completed" | "Requested" | "Scheduled";

interface ActivityCardProps{
    role: Role,
    state: activityState,
}

export default function ActivityCard({ role, state}: ActivityCardProps){
    const profileElement = role == "CUSTOMER" ? 
        <div className="pt-4 flex flex-row justify-between items-end">
            <div className="flex flex-row items-end gap-2">
                <Image 
                    src="/pet-sitter.jpg"
                    width={48}
                    height={48}
                    alt="pet picture"
                    className="w-6 h-6 border-[2px] border-bright-blue rounded-full object-cover"
                />
                <p className="text-body-bold text-dark-blue">Kirana Jasmine Chewter</p>
            </div>
            <p className="h-5 text-subheading text-bright-green">$99</p>
        </div> :
        <div className="pt-4 flex flex-row justify-between items-end">
            <div className="flex flex-row items-end gap-2">
                <Image 
                    src="/profile.jpg"
                    width={48}
                    height={48}
                    alt="pet picture"
                    className="w-6 h-6 border-[2px] border-bright-blue rounded-full object-cover"
                />
                <p className="text-body-bold text-dark-blue">Anntonia Prosild</p>
            </div>
            {
                state == "Assigned" || state == "In progress" ?
                <p className="h-5 text-subheading text-bright-green">$99</p> :
                state == "Unassigned" && <button className="text-body-bold text-soft-gray">Cancel</button>
                
            } 
        </div>;
    
    const topRightElement = role == "CUSTOMER" ? (
        state == "Assigned" ?
        <div className="flex flex-row items-baseline gap-1 text-dark-blue">
            <p className="text-body">start in</p>
            <p className="text-subheading">30</p>
            <p className="text-body">m</p>
        </div> : 
        (
            state == "In progress" ?
            <div className="flex flex-row items-baseline gap-1 text-dark-blue">
                <p className="text-body">end in</p>
                <p className="text-subheading">30</p>
                <p className="text-body">m</p>
            </div>
            :
            <></>
        )
        
    ): (
        state == "Assigned" ?
        <div className="flex flex-row items-baseline gap-1 text-dark-blue">
            <p className="text-body">start in</p>
            <p className="text-subheading">30</p>
            <p className="text-body">m</p>
        </div> :
        (
            state == "In progress" ?
            <div className="flex flex-row items-baseline gap-1 text-dark-blue">
                <p className="text-body">end in</p>
                <p className="text-subheading">30</p>
                <p className="text-body">m</p>
            </div> :
            <p className="h-5 text-subheading text-bright-green">$99</p>
        )
    );

    const bottomElement = role == "CUSTOMER" ? (
        state == "Unassigned" ? 
        <ShowRequestButton /> : 
        (
            state == "Returning" ?
            <div className="w-full flex flex-row gap-8">
                <button className="flex-1 px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green">I have received my pets</button>
                <Link
                    href={"/activity/123456/report"} 
                    className="flex-1 px-6 py-4 flex flex-row justify-center items-center border-[2px] border-bright-red rounded-lg text-body-bold text-bright-red"
                >Report an issue</Link>
            </div> : (
                state == "Completed" ?
                <Link
                    href={"/activity/123456/review"}
                    className="w-full px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-golden-yellow"
                >Rate pet sitter</Link> : 
                <></>
            )
        )
    ):
    (
        state == "Returning" && <button className="w-full px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green">I have returned all pets</button>
    );
    
    return (
        <div className="px-4 py-6 flex flex-col gap-4 border border-bd-gray rounded-lg hover:shadow-custom">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <p className="text-subheading text-bright-blue">Whiskers & Buddy Outing</p>
                    <div className="flex flex-row gap-1">
                        <Image 
                            src="/Whiskers.jpg"
                            width={80}
                            height={80}
                            alt="pet picture"
                            className="w-10 h-10 border-[3px] border-bright-blue rounded-full object-cover"
                        />
                        <Image 
                            src="/Whiskers.jpg"
                            width={80}
                            height={80}
                            alt="pet picture"
                            className="w-10 h-10 border-[3px] border-bright-blue rounded-full object-cover"
                        />
                    </div>
                </div>
                {topRightElement}
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col">
                    <div className="pb-4 flex flex-row gap-8 border-b border-bd-gray">
                        <div className="w-[308px] flex flex-col items-start gap-2">
                            <p className="text-body-bold">Start</p>
                            <p className="text-body">December 31, 2024 at 7:00 am</p>
                        </div>
                        <div className="w-[308px] flex flex-col items-start gap-2">
                            <p className="text-body-bold">End</p>
                            <p className="text-body">December 31, 2024 at 6:00 pm</p>
                        </div>
                    </div>
                    <div className={`pt-4 flex flex-row items-end gap-2 ${!(role == "CUSTOMER" && state == "Unassigned") &&"pb-4 border-b border-bd-gray"}`}>
                        <LocationIcon />
                        <p className="text-body">KMITL ECC Building</p>
                    </div>
                    {!(role == "CUSTOMER" && state == "Unassigned") && profileElement}
                </div>
                {bottomElement}
            </div>
        </div>
    );
}
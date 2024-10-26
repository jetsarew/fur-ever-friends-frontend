"use client";

import { usePathname } from "next/navigation";
import ActivityNavBarButton from "../Button/ActivityNavBarButton";
import { customerLinks, petSitterLinks } from "@/shared/ActivityNavLink";
import { useAppSelector } from "@/store/hooks";

export default function ActivityNavBar() {
    const userData = useAppSelector((state) => state.auth.user);

    const pathname = usePathname();
    return (
        <div className="pt-4 flex flex-row border-b border-bd-gray sticky top-[64px] bg-white">
            {
                userData?.role == "PETSITTER" ?
                petSitterLinks.map((link, idx) => {
                    return (
                    <ActivityNavBarButton
                        key={idx}
                        href={link.href} 
                        name={link.name} 
                        active={pathname.substring(10) == link.href}
                    />)
                }) :
                customerLinks.map((link, idx) => {
                    return (
                    <ActivityNavBarButton
                        key={idx}
                        href={link.href} 
                        name={link.name} 
                        active={pathname.substring(10) == link.href}
                    />)
                })
            }
        </div>
    );
}
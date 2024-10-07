"use client";

import { usePathname } from "next/navigation";
import ActivityNavBarButton from "../Button/ActivityNavBarButton";
import { links } from "@/shared/ActivityNavLink";

export default function ActivityNavBar() {
    const pathname = usePathname();
    return (
        <div className="pt-4 flex flex-row border-b border-bd-gray sticky top-[64px] bg-white">
            {
                links.map((link, idx) => {
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
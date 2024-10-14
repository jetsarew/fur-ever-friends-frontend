"use client";

import { useQualificationStep } from "@/hooks/useQualificationStep";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthNavBar() {
    const pathname = usePathname();
    const { resetStateStore } = useQualificationStep();
    return (
        <div className="w-[442px] flex flex-row items-center border-b border-bd-gray text-button">
            <Link
                href={"/auth/signup/pet-owner"}
                onClick={() => resetStateStore()}
                className={`flex-1 py-4 flex flex-row justify-center items-center text-button ${pathname.endsWith("pet-owner") ? "text-dark-blue border-b-[3px] border-dark-blue" : "text-soft-gray"}`}
            >
                I am a pet owner
            </Link>
            <Link
                href={"/auth/signup/pet-sitter"}
                className={`flex-1 py-4 flex flex-row justify-center items-center text-button ${pathname.endsWith("pet-sitter") ? "text-dark-blue border-b-[3px] border-dark-blue" : "text-soft-gray"}`}
            >
                I am a pet sitter
            </Link>
        </div>
    );
}
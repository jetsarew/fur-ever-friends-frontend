"use client";

import { PetOwnerPage, PetSitterPage } from "@/components/Admin/Page/UsersRolePage"
import { useSearchParams } from "next/navigation";

export default function UserPage() {
    const searchParams = useSearchParams();
    const role_id = searchParams.get("role_id");

    const roleIdNumber = role_id !== null ? Number(role_id) : null;

    return (
        <div className="w-[918px]">
            <div className="grid gap-[32px]">
                {roleIdNumber == 0 ?
                    <PetOwnerPage /> :
                    <PetSitterPage />
                }
            </div>
        </div>
    )
}
"use client";

import { PetOwnerPage, PetSitterPage } from "@/components/Admin/Page/UsersRolePage"
// import { useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";
import { CommonUserModel } from "@/types/user.type";
import { userService } from "@/services/user.service";

export default function UserPage({ params }: {
    params: { id: string, userId: string }
}) {
    const [user, setUser] = useState<CommonUserModel>();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getUser(params.userId);
                setUser(response);
            } catch (error) {
                console.error("Failed to fetch qualifications:", error);
            }
        };

        fetchUsers();
    }, []);

    // const searchParams = useSearchParams();
    // const role_id = searchParams.get("role_id");

    // const roleIdNumber = role_id !== null ? Number(role_id) : null;

    return (user &&
        <div className="w-[918px]">
            <div className="grid gap-[32px]">
                {user.role == "CUSTOMER" ?
                    <PetOwnerPage /> :
                    <PetSitterPage />
                }
            </div>
        </div>
    )
}
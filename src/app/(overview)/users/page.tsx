'use client'

import { ManageUsersHeader } from "@/components/Admin/Card/Header"
import { ManageUsersContent } from "@/components/Admin/Card/Content"
import SearchBar from "@/components/Admin/Input/SearchBar"
import { UsersFilter } from "@/components/Admin/Button/Filter"
import { useState, useEffect } from "react";
import { CommonUserModel } from "@/types/user.type"
import { userService } from "@/services/user.service";

export default function UsersPage() {
    const [users, setUsers] = useState<CommonUserModel[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getAllUser();
                setUsers(response);
            } catch (error) {
                console.error("Failed to fetch qualifications:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col w-max top-[112px] left-[143px] gap-[32px]">
            <div className="flex gap-[16px] items-center">
                <SearchBar />
                <div>
                    <UsersFilter />
                </div>
            </div>
            <div>
                <ManageUsersHeader />
                {users && users.map((user) => (
                    <ManageUsersContent
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    )
}
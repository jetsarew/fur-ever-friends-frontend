'use client'

import { ManageUsersHeader } from "@/components/Admin/Card/Header"
import { ManageUsersContent } from "@/components/Admin/Card/Content"
import SearchBar from "@/components/Admin/Input/SearchBar"
import { UsersFilter } from "@/components/Admin/Button/Filter"
import { useState, useEffect } from "react";
import { CommonUserModel } from "@/types/user.type"
import { userService } from "@/services/user.service";

export type isFilterStatusType = (isFilterStatus: boolean) => void;
export type isFilterRoleType = (isFilterRole: boolean) => void;
export type filterStatusByType = (filterStatusBy: string) => void;
export type filterRoleByType = (filterRoleBy: string) => void;

export default function UsersPage() {
    const [users, setUsers] = useState<CommonUserModel[]>([]);
    const [isFilterStatus, setIsFilterStatus] = useState<boolean>(false);
    const [filterStatusBy, setFilterStatusBy] = useState<string>("enabled");

    const [isFilterRole, setIsFilterRole] = useState<boolean>(false);
    const [filterRoleBy, setFilterRoleBy] = useState<string>("pet sitter");

    useEffect(() => {
        const fetchUsers = async () => {
            try {

                let filterRole;
                if (filterRoleBy == "pet sitter")
                    filterRole = "PETSITTER";
                else if (filterRoleBy == "pet owner")
                    filterRole = "CUSTOMER";

                let filterStatus;
                if (filterStatusBy == "enabled")
                    filterStatus = "ACTIVE";
                else if (filterStatusBy == "disabled")
                    filterStatus = "INACTIVE";


                if (isFilterStatus || isFilterRole) {
                    let path = "?";

                    if (isFilterStatus) {
                        path += `accountState=${filterStatus}`;
                    }

                    if (isFilterRole) {
                        path += (isFilterStatus ? "&" : "") + `role=${filterRole}`;
                    }

                    console.log(path);
                    const response = await userService.getAllUser(path);
                    setUsers(response);

                } else {
                    const response = await userService.getAllUser(``);
                    setUsers(response);
                }
            } catch (error) {
                console.error("Failed to fetch qualifications:", error);
            }
        };
        fetchUsers();
    }, [isFilterStatus, isFilterRole, filterStatusBy, filterRoleBy]);

    const handleFilterStatusChange: isFilterStatusType = (isFilterStatus: boolean) => {
        setIsFilterStatus(isFilterStatus);
    }

    const handleFilterRoleChange: isFilterRoleType = (isFilterRole: boolean) => {
        setIsFilterRole(isFilterRole);
    }

    const handleFilterStatusBy: filterStatusByType = (filterStatusBy: string) => {
        setFilterStatusBy(filterStatusBy);
    }

    const handleFilterRoleBy: filterRoleByType = (filterRoleBy: string) => {
        setFilterRoleBy(filterRoleBy);
    }

    return (
        <div className="flex flex-col w-max top-[112px] left-[143px] gap-[32px]">
            <div className="flex gap-[16px]">
                <div>
                    <SearchBar />
                </div>
                <div className="pt-[16px]">
                    <UsersFilter
                        handleFilterStatusChange={handleFilterStatusChange}
                        handleFilterRoleChange={handleFilterRoleChange}
                        handleFilterStatusBy={handleFilterStatusBy}
                        handleFilterRoleBy={handleFilterRoleBy} />
                </div>
            </div>
            <div>
                <ManageUsersHeader />
                {users.map((user) => (
                    <ManageUsersContent
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    )
}
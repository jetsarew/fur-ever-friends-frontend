'use client'

import { ManageUsersHeader } from "@/components/Admin/Card/Header"
import { ManageUsersContent } from "@/components/Admin/Card/Content"
import { UsersFilter } from "@/components/Admin/Button/Filter"
import { useState, useEffect } from "react";
import { CommonUserModel } from "@/types/user.type"
import { userService } from "@/services/user.service";
import InputField from "@/components/Input/InputField"

export type isFilterStatusType = (isFilterStatus: boolean) => void;
export type isFilterRoleType = (isFilterRole: boolean) => void;
export type filterStatusByType = (filterStatusBy: string) => void;
export type filterRoleByType = (filterRoleBy: string) => void;

export default function UsersPage() {
    const [users, setUsers] = useState<CommonUserModel[]>([]);
    const [inputValue, setInputValue] = useState("");
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

                let path = "?";
                let isSearchAdded = false;

                if (isFilterStatus) {
                    path += `accountState=${filterStatus}`;
                }

                if (isFilterRole) {
                    path += (isFilterStatus ? "&" : "") + `role=${filterRole}`;
                }

                if (inputValue) {
                    path += (isFilterStatus || isFilterRole ? "&" : "") + `search=${inputValue}`;
                    isSearchAdded = true;
                }

                if (isSearchAdded) {
                    path += `&searchType=id,firstname,lastname,email`;
                }

                const response = await userService.getAllUser(path);
                setUsers(response);

            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        const handler = setTimeout(() => {
            fetchUsers();
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [isFilterStatus, isFilterRole, filterStatusBy, filterRoleBy, inputValue]);

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

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

    const filteredUsers = users.filter((user) => {
        const searchQuery = inputValue.toLowerCase();
        const { id, firstname, lastname, email, phone } = user;
        return (
            id.toString().includes(searchQuery) ||
            (firstname && firstname.toLowerCase().includes(searchQuery)) ||
            (lastname && lastname.toLowerCase().includes(searchQuery)) ||
            (email && email.toLowerCase().includes(searchQuery)) ||
            (phone && phone.toString().includes(searchQuery))
        );
    });

    return (
        <div className="flex flex-col w-max top-[112px] left-[143px] gap-[32px]">
            <div className="flex gap-[16px] items-center">
                <InputField
                    label=""
                    placeholder="Search by ID, Name, Email, or Phone Number"
                    value={inputValue}
                    onChange={handleInputChange}
                    width="w-80"
                    height="h-12"
                />
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
                {filteredUsers.map((user) => (
                    <ManageUsersContent
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
}

"use client";

import { ViewApplicationsHeader } from "@/components/Admin/Card/Header";
import { ViewApplicationsContent } from "@/components/Admin/Card/Content";
import { FilterIcon } from "@/shared/Icon";
import { qualificationService } from "@/services/qualification.service";
import { useState, useEffect } from "react";
import { QualificationModelResponse } from "@/types/user.type";
import InputField from "@/components/Input/InputField";

export default function ApplicationsPage() {
    const [qualifications, setQualifications] = useState<QualificationModelResponse[]>([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const fetchQualifications = async () => {
            try {
                const response = await qualificationService.getQualifications();
                setQualifications(response);
            } catch (error) {
                console.error("Failed to fetch qualifications:", error);
            }
        };

        const handler = setTimeout(() => {
            fetchQualifications();
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, []);

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    // Filter qualifications based on search query
    const filteredQualifications = qualifications.filter((qualification) => {
        const searchQuery = inputValue.toLowerCase();
        const { id, firstname, lastname, email, phone } = qualification;
        return (
            id.toString().includes(searchQuery) || // Search by ID
            (firstname && firstname.toLowerCase().includes(searchQuery)) || // Search by firstname
            (lastname && lastname.toLowerCase().includes(searchQuery)) || // Search by lastname
            (email && email.toLowerCase().includes(searchQuery)) || // Search by email
            (phone && phone.toString().includes(searchQuery)) // Search by phone number
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
                <div>
                    <FilterIcon />
                </div>
            </div>
            <div>
                <ViewApplicationsHeader />
                {filteredQualifications.map((qualification) => (
                    <ViewApplicationsContent
                        key={qualification.id}
                        qualification={qualification}
                    />
                ))}
            </div>
        </div>
    );
}

'use client'

import { ViewApplicationsHeader } from "@/components/Admin/Card/Header"
import { ViewApplicationsContent } from "@/components/Admin/Card/Content"
// import SearchBar from "@/components/Admin/Input/SearchBar"
import { FilterIcon } from "@/shared/Icon"
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

        fetchQualifications();
    }, []);

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    // console.log("A")
    // console.log(typeof (qualifications));
    // console.log(qualifications);
    // console.log("B")

    return (
        <div className="flex flex-col w-max top-[112px] left-[143px] gap-[32px]">
            <div className="flex gap-[16px] items-center">
                <InputField
                    label=""
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleInputChange}
                    width="w-80"
                    height="h-12"
                />
                {/* <SearchBar /> */}
                <div>
                    <FilterIcon />
                </div>
            </div>
            <div>
                <ViewApplicationsHeader />
                {qualifications.map((qualification) => (
                    <ViewApplicationsContent
                        key={qualification.id}
                        qualification={qualification}
                    />
                ))}
            </div>
        </div>
    );
}
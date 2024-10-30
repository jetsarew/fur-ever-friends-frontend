"use client";

import { useState } from "react";
import { DropdownArrowIcon } from "@/shared/Icon";
import { filterRoleByType, filterStatusByType } from "@/app/(overview)/users/page";

export function Dropdown({ width, options, defaultOption, onOptionSelect }: {
    width: number;
    options: string[];
    defaultOption: string;
    onOptionSelect: (selectedOption: string) => void;
}) {
    const [isClosed, setIsClosed] = useState(true);
    const [option, setOption] = useState(defaultOption);

    const handleState = () => {
        setIsClosed(!isClosed);
    };

    const handleOptionClick = (option: string) => {
        setOption(option);
        setIsClosed(true);
        onOptionSelect(option);
    };

    return (
        <div style={{ width: `${width}px` }} className="rounded-[12px] border-[1px] border-light-gray2 bg-white cursor-pointer select-none">
            <div onClick={handleState} className={`flex w-[${width}px] h-[46px] rounded-[12px] px-[18px] py-[15px] justify-between items-center border border-light-gray2 bg-white -m-[1px]`}>
                <div>{option}</div>
                <div className="flex justify-center pt-[5px] w-[16px] h-[16px]">
                    <DropdownArrowIcon />
                </div>
            </div>
            {!isClosed &&
                options.map((opt, id) => (
                    <div key={id}
                        onClick={() => handleOptionClick(opt)}
                        className={`px-[18px] py-[8px] ${id == options.length - 1 ? "" : "border-b border-light-gray2"}`}>
                        {opt}
                    </div>
                ))
            }
        </div>
    );
}

export function UserStatusDropdown({ handleFilterStatusBy }: { handleFilterStatusBy: filterStatusByType }) {
    return (
        <Dropdown width={128} options={["enabled", "disabled"]} defaultOption={"enabled"} onOptionSelect={handleFilterStatusBy} />
    );
}

export function UserRoleDropdown({ handleFilterRoleBy }: { handleFilterRoleBy: filterRoleByType }) {
    return (
        <Dropdown width={144} options={["pet sitter", "pet owner"]} defaultOption={"pet sitter"} onOptionSelect={handleFilterRoleBy} />
    );
}
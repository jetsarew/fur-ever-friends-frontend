"use client";

import { useState } from "react";

type optionElement = {
    label: string,
    value: string,
}

interface SelectProps {
    label: string;
    labelStyle?: string;
    width?: string;
    height?: string;
    options: optionElement[];
}

export default function Select({
    label,
    labelStyle = "text-body-bold",
    width = "",
    height = "",
    options,
}: SelectProps){

    const [selectedValue, setSelectedValue] = useState<string>('');

    return (
        <div className={`${width} flex flex-col gap-3`}>
            <label className={labelStyle}>{label}</label>
            <select 
                value={selectedValue} 
                onChange={(e) => setSelectedValue(e.target.value)}
                className={`w-full ${height} p-3 border border-bd-gray rounded-lg text-body-paragraph focus:outline-none focus:border-bright-blue`}
            >
                <option value="" disabled>
                Select an option
                </option>
                {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
        </div>
    );
}
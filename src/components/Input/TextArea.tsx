"use client";
import { useState } from 'react';

interface TextAreaProps {
    label: string;
    labelStyle?: string;
    placeholder?: string;
    value?: string;
    width?: string;
    height?: string;
    before?: JSX.Element;
    onChange: (value: string) => void;
}

export default function TextArea({
    label,
    labelStyle = "text-body-bold",
    placeholder = "",
    value = "",
    width = "",
    height = "",
    before: icon = <></>,
    onChange,
}: TextAreaProps) {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };

    return (
        <div className={`${width} flex flex-col gap-3`}>
            <label className={labelStyle}>{label}</label>
            <div className="flex flex-row items-center gap-2">
                {icon}
                <textarea
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    className={`w-full ${height} p-3 border border-bd-gray rounded-lg text-body-paragraph focus:outline-none focus:border-bright-blue resize-none`}
                />
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { DefaultAction, BlockedAction, ReportAction, ApplicationAction } from "./UserAction";
import { OptionIcon } from "@/shared/Icon";

export function DefaultOption() {
    const [isClosed, setIsClosed] = useState(true);

    const handleOptionButtonChange = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="relative flex items-center">
            <div onClick={handleOptionButtonChange} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {!isClosed && (
                <div className="w-fit absolute left-[calc(100%+30px)]">
                    <DefaultAction />
                </div>
            )}
        </div>
    );
}

export function BlockedOption() {
    const [isClosed, setIsClosed] = useState(true);

    const handleOptionButtonChange = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="relative flex items-center">
            <div onClick={handleOptionButtonChange} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {!isClosed && (
                <div className="w-fit absolute left-[calc(100%+30px)]">
                    <BlockedAction />
                </div>
            )}
        </div>
    );
}

export function ReportOption() {
    const [isClosed, setIsClosed] = useState(true);

    const handleOptionButtonChange = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="relative flex items-center">
            <div onClick={handleOptionButtonChange} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {!isClosed && (
                <div className="w-fit absolute left-[calc(100%+30px)]">
                    <ReportAction />
                </div>
            )}
        </div>
    );
}

export function ApplicationOption() {
    const [isClosed, setIsClosed] = useState(true);

    const handleOptionButtonChange = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="relative flex items-center">
            <div onClick={handleOptionButtonChange} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {!isClosed && (
                <div className="w-fit absolute left-[calc(100%+30px)]">
                    <ApplicationAction />
                </div>
            )}
        </div>
    );
}

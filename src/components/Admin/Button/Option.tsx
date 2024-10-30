"use client";

import { useState, useRef } from "react";
import { DefaultAction, BlockedAction, ReportAction, ApplicationAction } from "./UserAction";
import { OptionIcon } from "@/shared/Icon";
import useOutSideClick from "@/hooks/useOutsideClick";
import { UpdateStateFunction } from "../Card/Content";

export function DefaultOption() {
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    const onButtonClicked = () => {
        setShow(!show);
    }

    return (
        <div className="relative flex items-center">
            <div ref={buttonRef} onClick={onButtonClicked} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {show && (
                <div ref={popUpRef} className="w-fit absolute left-[calc(100%+30px)]">
                    <DefaultAction />
                </div>
            )}
        </div>
    );
}

export function BlockedOption() {
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    const onButtonClicked = () => {
        setShow(!show);
    }

    return (
        <div className="relative flex items-center">
            <div ref={buttonRef} onClick={onButtonClicked} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {show && (
                <div ref={popUpRef} className="w-fit absolute left-[calc(100%+30px)]">
                    <BlockedAction />
                </div>
            )}
        </div>
    );
}

export function ReportOption() {
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    const onButtonClicked = () => {
        setShow(!show);
    }

    return (
        <div className="relative flex items-center">
            <div ref={buttonRef} onClick={onButtonClicked} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {show && (
                <div ref={popUpRef} className="w-fit absolute left-[calc(100%+30px)]">
                    <ReportAction />
                </div>
            )}
        </div>
    );
}

export function ApplicationOption({ handleUpdateState }: {
    handleUpdateState: UpdateStateFunction;
}) {
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setShow);

    const onButtonClicked = () => {
        setShow(!show);
    }

    return (
        <div className="relative flex items-center">
            <div ref={buttonRef} onClick={onButtonClicked} className="flex justify-center items-center p-2 cursor-pointer">
                <OptionIcon />
            </div>
            {show && (
                <div ref={popUpRef} className="w-fit absolute left-[calc(100%+30px)]">
                    <ApplicationAction handleUpdateState={handleUpdateState} />
                </div>
            )}
        </div>
    );
}

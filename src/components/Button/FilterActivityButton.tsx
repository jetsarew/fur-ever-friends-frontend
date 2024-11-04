"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { FilterIcon } from "@/shared/Icon";
import { useRef, useState } from "react";
import FilterEntry from "./FilterEntry";

export function FilterActivityButton() {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [endTime, setEndTime] = useState<number | null>(null);
    const [duration, setDuration] = useState<number | null>(null);

    const [visible, setVisible] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setVisible);

    return (
        <div 
            className="relative"
        >
            <div 
                ref={buttonRef}
                onClick={() => setVisible(!visible)}
                className="hover:cursor-pointer"
            >
                <FilterIcon />
            </div>
            {
                visible && 
                <div
                    ref={popUpRef}
                    className="px-4 w-[271px] flex flex-col border border-[#d9d9d9] rounded-xl bg-white absolute right-0 top-[100%] z-[2] shadow-custom"
                >
                    <FilterEntry 
                        label="Start Time"
                        unit="day (s)"
                        borderBottom={true}
                        value={startTime}
                        onValueChanged={(val: number) => {
                            setStartTime(val);
                        }}
                        onCheckBoxClicked={() => setStartTime(startTime == null ? 2 : null)}
                        max={10}
                        min={2}
                    />
                    <FilterEntry 
                        label="End Time"
                        unit="day (s)"
                        borderBottom={true}
                        value={endTime}
                        onValueChanged={(val: number) => {
                            setEndTime(val);
                        }}
                        onCheckBoxClicked={() => setEndTime(endTime == null ? 2 : null)}
                        max={10}
                        min={2}
                    />
                    <FilterEntry 
                        label="Duration"
                        unit="hour (s)"
                        borderBottom={false}
                        value={duration}
                        onValueChanged={(val: number) => {
                            setDuration(val);
                        }}
                        onCheckBoxClicked={() => setDuration(duration == null ? 1 : null)}
                        max={24}
                        min={1}
                    />
                </div>
            }
        </div>
    );
}
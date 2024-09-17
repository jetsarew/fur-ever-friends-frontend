"use client";

import { BoxIcon, CheckboxIcon } from "@/shared/Icon";
import { useState } from "react";
// import Image from "next/image";

export default function ActivitySection({ title, description, border, showCheckBox, onCheckBoxClicked }:{
    title: string;
    description: string;
    border?: string
    showCheckBox: boolean;
    onCheckBoxClicked: (d: number) => void;
}){
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <div className={`px-3 py-4 flex flex-col gap-2 ${border == undefined ? "" : border}`}>
            <div className="w-full flex flex-row justify-between items-center">
                <p className="text-body text-dark-blue">{title}</p>
                {/* { <p className="text-body text-bright-green">done</p> } */}
                {
                    showCheckBox && (
                        checked ? 
                        <button
                            onClick={() => {setChecked(false); onCheckBoxClicked(-1);}}
                        >
                            <CheckboxIcon />
                        </button> : 
                        <button
                            onClick={() => {setChecked(true); onCheckBoxClicked(1);}}
                        >
                            <BoxIcon />
                        </button>
                    )   
                }
            </div>
            <p className="text-small-paragraph text-standard-gray">{description}</p>
        </div>
    )
}
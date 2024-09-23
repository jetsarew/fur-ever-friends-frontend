"use client";

import Select from "@/components/Input/Select";
import TextArea from "@/components/Input/TextArea";
import Image from "next/image";

type optionElement = {
    label: string,
    value: string,
}

const options:optionElement[] = [
    {
        label: "Unprofessional Behavior",
        value: "Unprofessional Behavior"
    },
    {
        label: "Neglect/Abuse",
        value: "Neglect/Abuse"
    },
    {
        label: "No Show",
        value: "No Show"
    },
    {
        label: "Service Quality",
        value: "Service Quality"
    },
    {
        label: "Policy Violation",
        value: "Policy Violation"
    },
]

export default function ActivityReportPage({ params }: {
    params: { id: string }
}
){
    console.log(params.id);

    return (
        <form className="w-[680px] mx-auto flex flex-col items-center gap-8">
            <div className="w-full flex flex-col items-start gap-8">
                <div className="flex flex-row items-center gap-4">
                    <Image 
                        src="/pet-sitter.jpg"
                        width={120}
                        height={120}
                        alt={"pet sitter profile"}
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-bright-blue object-cover"
                    />
                    <p className="text-subheading text-bright-blue">Kirana Jasmine Chewter</p>
                </div>
            </div>
            <div className="w-full flex flex-col items-start gap-8">
                <Select 
                    label="Report type"
                    width={"w-[324px]"}
                    options={options}
                />
                <TextArea 
                    label={"Description"}
                    width={"w-full"}
                    height={"h-[136px]"}
                    onChange={() => {}}
                />
            </div>
            <button className="px-6 py-4 flex flex-row justify-between items-center rounded-lg text-button text-white bg-bright-red">Send report</button>
        </form>
    );
}
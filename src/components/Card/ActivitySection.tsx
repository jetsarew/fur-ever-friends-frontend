// import { BoxIcon, CheckboxIcon } from "@/shared/Icon";
// import Image from "next/image";

export default function ActivitySection({ title, description, border }:{
    title: string;
    description: string;
    border?: string
}){
    return (
        <div className={`px-3 py-4 flex flex-col gap-2 ${border == undefined ? "" : border}`}>
            <div className="w-full flex flex-row justify-between items-center">
                <p className="text-body text-dark-blue">{title}</p>
                {/* <p className="text-body text-bright-green">done</p> */}
                {/* <CheckboxIcon /> */}
                {/* <BoxIcon /> */}
            </div>
            <p className="text-small-paragraph text-standard-gray">{description}</p>
        </div>
    )
}
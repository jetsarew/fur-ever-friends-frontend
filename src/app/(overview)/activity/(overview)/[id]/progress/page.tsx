"use client";

import ActivityProgressCard from "@/components/Card/ActivityProgressCard";
//import PetActivityCard from "@/components/Card/PetActivityCard";
import TextArea from "@/components/Input/TextArea";
import Image from "next/image";

export default function ActivityProgressPage({ params }: {
    params: { id: string }
}
){
    const role: "pet sitter" | "pet owner" = "pet sitter";
    console.log(params.id);
    return (
        role == "pet sitter" ?
        <div className="w-full flex flex-col items-start gap-8">
            <h1 className="text-header text-bright-blue">Whiskers & Buddy Outing</h1>
            <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                <h3 className="text-subheading text-dark-blue">Pet Activities</h3>
                <div className="flex flex-row justify-between items-center flex-wrap gap-8">
                {
                    // activity.services.map((service, index) => {
                    //         return (
                    //             <PetActivityCard 
                    //                 key={index}
                    //                 service={service}
                    //                 showCheckBox={true}
                    //                 showProgressBar={true}
                    //             />
                    //         )
                    //     })
                }
                </div>
                <div className="flex flex-row justify-center">
                    <button className="px-8 py-4 flex flex-row justify-center items-center rounded-lg bg-bright-green text-button text-white">Save</button>
                </div>  
            </div>
            <div className="w-full py-6 px-4 flex flex-col items-start gap-4 border border-bd-gray rounded-lg">
                <h3 className="text-subheading text-dark-blue">New Progress</h3>
                <button className="px-6 py-2 flex flex-row justify-center items-center rounded-lg bg-bright-blue text-button text-white">Upload image</button>
                <div className="h-[250px] flex flex-row gap-8">
                    <Image 
                        src="/Whiskers.jpg"
                        width={850}
                        height={500}
                        alt={"uploaded progress picture"}
                        className="w-[425px] h-[250px] object-cover"
                    />
                    <TextArea 
                        width={"w-[665px]"}
                        height={"h-[250px]"}
                        onChange={() => {}}
                    />
                </div>
                <div className="w-full flex flex-row justify-end gap-4">
                    <button className="px-8 py-4 flex flex-row justify-center items-center rounded-lg bg-bright-green text-button text-white">Submit</button>
                    <button className="px-8 py-4 flex flex-row justify-center items-center border-[2px] border-soft-gray rounded-lg text-body-bold text-soft-gray">Cancel</button>
                </div>
            </div>
        </div>
        :
        <div className="w-[918px] mx-auto flex flex-row justify-between items-start flex-wrap gap-8">
            <ActivityProgressCard />
            <ActivityProgressCard />
            <ActivityProgressCard />
        </div> 
    )
}
"use client";

import { useState } from "react";
import ActivityProgressBar from "./ActivityProgressBar";
import ActivitySection from "./ActivitySection";
//import PetCard from "./PetCard";

interface PetActivityCardProps {
    showCheckBox: boolean;
    showProgressBar: boolean;
}

export default function PetActivityCard({
    showCheckBox,
    showProgressBar,
}: PetActivityCardProps){
    const [numOfTaskDone, setNumOfTaskDone] = useState<number>(0);
    const onActivityCheckBoxClicked = (d: number) => {
        setNumOfTaskDone(numOfTaskDone + d); 
    }
    return (
        <div className="flex flex-col items-center">
            <div className={`w-[544px] px-4 pt-3 flex flex-col items-center border rounded-lg ${showProgressBar && "border-b-0 rounded-b-none"} border-bd-gray `}>
                {/* <PetCard 
                    width={"w-full"}
                    padding={"pt-3"}
                    border={"border-b border-bd-gray"}
                /> */}
                <div>
                    <ActivitySection 
                        title={"Bathing"}
                        description={"Use Whisker’s shampoo and conditioner. Water should be lukewarm. Wet her coat, avoiding ears and face."}
                        border={"border-b border-bd-gray"}
                        showCheckBox={showCheckBox}
                        onCheckBoxClicked={onActivityCheckBoxClicked}
                    />
                    <ActivitySection 
                        title={"Nail Trimming"}
                        description={'Use the cat nail clippers labeled "Whiskers" and have the styptic powder nearby in case of any minor bleeding.'}
                        border={"border-b border-bd-gray"}
                        showCheckBox={showCheckBox}
                        onCheckBoxClicked={onActivityCheckBoxClicked}
                    />
                    <ActivitySection 
                        title={"Sleeping"}
                        description={"Dim the lights and keep the noise level low. She prefers a quiet environment for sleeping."}
                        showCheckBox={showCheckBox}
                        onCheckBoxClicked={onActivityCheckBoxClicked}
                    />
                </div>
            </div>
            {   
                showProgressBar &&
                <ActivityProgressBar 
                    numberOfTaskDone={numOfTaskDone}
                    numberOfAllTask={3}
                />
            }
        </div>
    )
}
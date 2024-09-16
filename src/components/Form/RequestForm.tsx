"use client";

import { useState } from "react";
import InputField from "../Input/InputField"
import TextArea from "../Input/TextArea";

export default function RequestForm(){
    const [applyClicked, setApplyClicked] = useState<boolean>(false);

    const onApplyButtonClicked = () => {
        setApplyClicked(true);
    }

    const onCancelButtonClicked = () => {
        setApplyClicked(false);
    }

    return (
        <div className="flex flex-col items-end">
            {
                !applyClicked &&
                <button
                    onClick={onApplyButtonClicked} 
                    className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-blue"
                >Apply for activity</button>
            }
            
            {
                applyClicked &&
                <div className="w-[561px] px-4 py-6 flex flex-col gap-[31px] border pop-up-shadow rounded-lg">
                    <h3 className="text-subheading text-bright-blue">Apply for Activity</h3>
                    <div className="flex flex-col gap-[15px]">
                        <InputField 
                            label="Service fee"
                            type="number"
                            width="w-[105px]"
                            before={<p className="text-body">$</p>}
                            onChange={(s: string) => {console.log(s)}}   
                        />
                        <TextArea
                            label="Message to pet owner"
                            width="w-full"
                            height=""
                            onChange={(s: string) => {console.log(s)}}   
                        />
                        <div className="flex flex-row gap-4">
                            <button className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green">Send request</button>
                            <button 
                                onClick={onCancelButtonClicked}
                                className="px-6 py-4 flex flex-row justify-center items-center border-[2px] border-soft-gray rounded-lg text-body-bold button text-soft-gray bg-white"
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            }         
        </div>
        
    );
}
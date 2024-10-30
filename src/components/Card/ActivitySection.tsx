"use client";

import { BoxIcon, CheckboxIcon } from "@/shared/Icon";
import { TaskModelResponse } from "@/types/response.type";

export default function ActivitySection({ title, description, border, showCheckBox, onCheckBoxClicked, task, canUpdateTaskStatus}:{
    title: string;
    description: string;
    border?: string
    showCheckBox: boolean;
    task: TaskModelResponse;
    canUpdateTaskStatus: boolean;
    onCheckBoxClicked: (taskId: string) => void;
}){

    return (
        <div className={`px-3 py-4 w-full flex flex-col items-start gap-2 ${border == undefined ? "" : border}`}>
            <div className="w-full flex flex-row justify-between items-center">
                <p className="text-body text-dark-blue">{title}</p>
                {
                    showCheckBox ? (
                        task.status ? 
                        <button
                            type="button"
                            className={canUpdateTaskStatus ? "" : "hover:cursor-default"}
                            onClick={() => { 
                                if(canUpdateTaskStatus) {
                                    onCheckBoxClicked(task.id);
                                }
                            }}
                        >
                            <CheckboxIcon />
                        </button> : 
                        <button
                            type="button"
                            className={canUpdateTaskStatus ? "" : "hover:cursor-default"}
                            onClick={() => { 
                                if(canUpdateTaskStatus) {
                                    onCheckBoxClicked(task.id);
                                }
                            }}
                        >
                            <BoxIcon />
                        </button>
                    ) :
                    ( task.status && <p className="text-body text-bright-green">done</p>)
                }
            </div>
            <p className="text-small-paragraph text-standard-gray">{description}</p>
        </div>
    )
}
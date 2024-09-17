export default function ActivityProgressBar({ numberOfTaskDone, numberOfAllTask }: {
    numberOfTaskDone: number;
    numberOfAllTask: number;
}){
    const width = `${Math.floor(numberOfTaskDone / 3 * 100)}%`
    return (
        <div className="w-full rounded-b-lg bg-very-light-gray overflow-hidden">
            <div 
                className={`${(numberOfTaskDone > 0) && "px-4"} py-[6px] flex flex-row justify-end items-center ${(numberOfTaskDone != numberOfAllTask) && "rounded-r-full"} ${(numberOfTaskDone > 0) && "bg-bright-green"} text-body text-white`}
                style={{ width: `${(numberOfTaskDone > 0) ? width : "40px"}` }}
            >
                {`${numberOfTaskDone}/${numberOfAllTask}`}
            </div>
        </div>
    );
}
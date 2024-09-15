export default function ActivityProgressBar({ numberOfTaskDone, numberOfAllTask}: {
    numberOfTaskDone: number;
    numberOfAllTask: number;
}){
    const width = `w-[${Math.floor(numberOfTaskDone / numberOfAllTask * 100)}%]`
    return (
        <div className="w-full rounded-b-lg bg-very-light-gray overflow-hidden">
            <div className={`${width} px-4 py-[6px] flex flex-row justify-end items-center ${(numberOfTaskDone != numberOfAllTask) && "rounded-r-full"} bg-bright-green text-body text-white`}>
                {`${numberOfTaskDone}/${numberOfAllTask}`}
            </div>
        </div>
    );
}
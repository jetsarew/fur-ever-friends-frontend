export function BlockButton() {
    return (
        <button className="h-[32px] w-fit border-[2px] border-bright-red rounded-[8px] text-body-bold text-bright-red py-[8px] px-[16px] flex justify-center items-center">
            Block
        </button>
    );
}

export function UnblockButton() {
    return (
        <button className="h-[32px] w-fit border-[2px] border-bright-blue bg-bright-blue rounded-[8px] text-body-bold text-white py-[8px] px-[16px] flex justify-center items-center">
            Unblock
        </button>
    );
}
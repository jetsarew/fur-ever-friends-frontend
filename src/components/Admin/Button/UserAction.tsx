import { BlockIcon, UnblockIcon, PersonIcon, MoreIcon, BinIcon, AcceptIcon, RejectIcon } from "@/shared/Icon";

export function DefaultAction() {
    return (
        <div className="border border-light-gray2 w-fit h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <BlockIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Block
                </div>
            </div>

            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <PersonIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    View profile
                </div>
            </div>
        </div>
    );
}

export function BlockedAction() {
    return (
        <div className="border border-light-gray2 w-fit h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <UnblockIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Unblock
                </div>
            </div>

            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <PersonIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    View profile
                </div>
            </div>
        </div>
    );
}

export function ReportAction() {
    return (
        <div className="border border-light-gray2 w-fit h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px] pt-[2px]">
                    <MoreIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    More
                </div>
            </div>
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <BinIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Remove
                </div>
            </div>
        </div>

    );
}

export function ApplicationAction() {
    return (
        <div className="border border-light-gray2 w-fit h-[120px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px_40px] shadow-custom cursor-pointer">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px] pt-[2px]">
                    <MoreIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    More
                </div>
            </div>
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <AcceptIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Accept
                </div>
            </div>
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <RejectIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Reject
                </div>
            </div>
        </div>
    );
}
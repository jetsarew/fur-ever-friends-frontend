import { BlockIcon, UnblockIcon, PersonIcon, MoreIcon, BinIcon, AcceptIcon, RejectIcon } from "@/shared/Icon";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UsersContext, ReportsContext, ApplicationsContext } from "../Card/Content";

export function DefaultAction() {
    const router = useRouter();
    const context = useContext(UsersContext);

    const handleUserClick = (user_id: string, role_id: number) => {
        router.push(`/users/${user_id}?role_id=${role_id}`);
    };

    return (context &&
        <div className="border border-light-gray2 w-max h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer select-none">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <BlockIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Block
                </div>
            </div>

            <div onClick={() => handleUserClick(context.user_id, context.role_id)} className="w-fit flex items-center">
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
    const router = useRouter();
    const context = useContext(UsersContext);

    const handleUserClick = (user_id: string, role_id: number) => {
        router.push(`/users/${user_id}?role_id=${role_id}`);
    };

    return (context &&
        <div className="border border-light-gray2 w-max h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer select-none">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <UnblockIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Unblock
                </div>
            </div>

            <div onClick={() => handleUserClick(context.user_id, context.role_id)} className="w-fit flex items-center">
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
    const router = useRouter();
    const id = useContext(ReportsContext);

    return (
        <div className="border border-light-gray2 w-max h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer select-none">
            <div onClick={() => router.push(`/reports/${id}`)} className="w-fit flex items-center">
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
    const router = useRouter();
    const id = useContext(ApplicationsContext);

    return (
        <div className="border border-light-gray2 w-max h-[120px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px_40px] shadow-custom cursor-pointer select-none">
            <div onClick={() => router.push(`/applications/${id}`)} className="w-fit flex items-center">
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
import { BlockIcon, UnblockIcon, PersonIcon, MoreIcon, BinIcon, AcceptIcon, RejectIcon } from "@/shared/Icon";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UsersContext, ReportsContext, ApplicationsContext } from "../Card/Content";
import { userService } from "@/services/user.service";
import { qualificationService } from "@/services/qualification.service";

export function DefaultAction() {
    const router = useRouter();
    const [user, userId] = useContext(UsersContext);
    // const userId = user?.customer?.userId || user?.petsitter?.userId;

    return (user &&
        <div className="border border-light-gray2 w-max h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer select-none">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <BlockIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Block
                </div>
            </div>

            <div onClick={() => router.push(`/users/id=${user.id}$&userId=${userId}`)} className="w-fit flex items-center">
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
    const user = useContext(UsersContext);
    const userId = user?.customer?.userId || user?.petsitter?.userId;

    return (user &&
        <div className="border border-light-gray2 w-max h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer select-none">
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <UnblockIcon />
                </div>
                <div className="text-body-bold text-soft-gray pl-[16px]">
                    Unblock
                </div>
            </div>

            <div onClick={() => router.push(`/users/id=${user.id}$&userId=${userId}`)} className="w-fit flex items-center">
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
    const report = useContext(ReportsContext);

    return (
        <div className="border border-light-gray2 w-max h-[80px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px] shadow-custom cursor-pointer select-none">
            <div onClick={() => router.push(`/reports/${report?.id}`)} className="w-fit flex items-center">
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
    const qualification = useContext(ApplicationsContext);

    const onAcceptQualificationClick = async () => {
        if (qualification) {
            return await userService.createPetSitter(qualification.email);
        }
    };

    const onRejectQualificationClick = async () => {
        if (qualification) {
            return await qualificationService.updateQualification(qualification.id, { state: "REJECTED" })
        }
    };

    return (
        <div className="border border-light-gray2 w-max h-[120px] pr-[18px] pl-[18px] rounded-[16px] grid grid-rows-[40px_40px_40px] shadow-custom cursor-pointer select-none">
            <div onClick={() => router.push(`/applications/${qualification?.id}`)} className="w-fit flex items-center">
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
                <div
                    className="text-body-bold text-soft-gray pl-[16px]"
                    onClick={onAcceptQualificationClick}>
                    Accept
                </div>
            </div>
            <div className="w-fit flex items-center">
                <div className="w-[16px] h-[16px]">
                    <RejectIcon />
                </div>
                <div
                    className="text-body-bold text-soft-gray pl-[16px]"
                    onClick={onRejectQualificationClick}>
                    Reject
                </div>
            </div>
        </div>
    );
}
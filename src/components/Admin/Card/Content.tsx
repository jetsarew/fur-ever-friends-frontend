import Role from "./Role";
import UserCard from "./UserCard";
import AccountStatus from "./AccountStatus";
import Report from "./Report";
import { OptionIcon } from "@/shared/Icon";

export function ManageUsersContent({ user, created_at }: {
    user: {
        user_id: string;
        src: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        role_id: number;
        account_status: number;
    };
    created_at: string;
}) {
    return (<div className="w-fit h-[72px] border border-bd-gray grid grid-cols-[174px_270px_240px_140px_135px_115px_80px]">
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.user_id}</div>
        <UserCard src={user.src} firstname={user.firstname} lastname={user.lastname} />
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.email}</div>
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{created_at}</div>
        <div className="flex justify-center items-center"><Role role_id={user.role_id} /></div>
        <div className="flex justify-center items-center px-[16px]"><AccountStatus account_status={user.account_status} /></div>
        <div className="flex justify-center items-center px-[16px]"><div className="w-[24px] h-[24px] flex items-center justify-center"><OptionIcon /></div></div>
    </div>);
}

export function ViewReportsContent({ id, reported_user, reporter_user, created_at, report_type }: {
    id: string;
    reported_user: {
        user_id: string;
        src: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        role_id: number;
        account_status: number;
    };
    reporter_user: {
        user_id: string;
        src: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        role_id: number;
        account_status: number;
    };
    created_at: string;
    report_type: number;
}) {
    return (<div className="w-fit h-[72px] border border-bd-gray grid grid-cols-[174px_270px_270px_140px_220px_80px]">
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{id}</div>
        <UserCard src={reported_user.src} firstname={reported_user.firstname} lastname={reported_user.lastname} />
        <UserCard src={reporter_user.src} firstname={reporter_user.firstname} lastname={reporter_user.lastname} />
        <div className="flex text-body text-standard-gray  pl-[16px] pr-[16px] justify-between items-center">{created_at}</div>
        <div className="flex justify-center items-center"><Report report_type={report_type} /></div>
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">Action</div>
    </div>);
}

export function ViewApplicationsContent({ id, user, created_at }: {
    id: string;
    user: {
        user_id: string;
        src: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        role_id: number;
        account_status: number;
    };
    created_at: string;
}) {
    return (<div className="w-fit h-[72px] border border-bd-gray grid grid-cols-[174px_270px_270px_220px_140px_80px]">
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{id}</div>
        <UserCard firstname={user.firstname} lastname={user.lastname} />
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.email}</div>
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.phone}</div>
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{created_at}</div>
        <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">Action</div>
    </div>);
}

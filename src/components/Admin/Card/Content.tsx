"use client";

import Role from "./Role";
import TableUserCard from "./TableUserCard";
import AccountStatus from "./AccountStatus";
import Report from "./Report";
import { DefaultOption, BlockedOption, ReportOption, ApplicationOption } from "../Button/Option";
import React, { createContext } from 'react';
interface UsersContextType {
    user_id: string;
    role_id: number;
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined);
export const ReportsContext = createContext<string | undefined>(undefined);
export const ApplicationsContext = createContext<string | undefined>(undefined);

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

    const context = {
        user_id: user.user_id,
        role_id: user.role_id,
    };


    return (
        <UsersContext.Provider value={context}>
            <div className="w-fit h-[72px] border border-t-0 border-bd-gray grid grid-cols-[174px_270px_240px_140px_135px_115px_80px]">
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.user_id}</div>
                <TableUserCard src={user.src} firstname={user.firstname} lastname={user.lastname} />
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.email}</div>
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{created_at}</div>
                <div className="flex justify-center items-center"><Role role_id={user.role_id} /></div>
                <div className="flex justify-center items-center px-[16px]"><AccountStatus account_status={user.account_status} /></div>
                <div className="flex justify-center items-center">{user.account_status == 0 ? <BlockedOption /> : <DefaultOption />}</div>
            </div>

        </UsersContext.Provider>
    );
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
    return (
        <ReportsContext.Provider value={id}>
            <div className="w-fit h-[72px] border border-t-0 border-bd-gray grid grid-cols-[174px_270px_270px_140px_220px_80px]">
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{id}</div>
                <TableUserCard src={reported_user.src} firstname={reported_user.firstname} lastname={reported_user.lastname} />
                <TableUserCard src={reporter_user.src} firstname={reporter_user.firstname} lastname={reporter_user.lastname} />
                <div className="flex text-body text-standard-gray  pl-[16px] pr-[16px] justify-between items-center">{created_at}</div>
                <div className="flex justify-center items-center"><Report report_type={report_type} /></div>
                <div className="flex justify-center items-center"><ReportOption /></div>
            </div>
        </ReportsContext.Provider>
    );
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
    return (
        <ApplicationsContext.Provider value={id} >
            <div className="w-fit h-[72px] border border-t-0 border-bd-gray grid grid-cols-[174px_270px_270px_220px_140px_80px]">
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{id}</div>
                <TableUserCard firstname={user.firstname} lastname={user.lastname} />
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.email}</div>
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.phone}</div>
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{created_at}</div>
                <div className="flex justify-center items-center"><ApplicationOption /></div>
            </div>
        </ApplicationsContext.Provider>
    );
}

"use client";

import TableUserCard from "./TableUserCard";
import Report from "./Report";
import Role from "./Role";
import AccountStatus from "./AccountStatus";
import { DefaultOption, BlockedOption, ReportOption, ApplicationOption } from "../Button/Option";
import React, { createContext, useEffect } from 'react';
import { QualificationModelResponse } from "@/types/user.type";
import { ReportModelResponse } from "@/types/response.type";
import { CommonUserModel } from "@/types/user.type";

interface UsersContextType {
    user: CommonUserModel,
    userId: string;
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined);
export const ReportsContext = createContext<ReportModelResponse | undefined>(undefined);
export const ApplicationsContext = createContext<QualificationModelResponse | undefined>(undefined);

function formatDate(dateString: string) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function ManageUsersContent({ user }: {
    user: CommonUserModel
}) {
    console.log("A");
    console.log(user.customer);
    console.log(user.petsitter);
    console.log(user.admin);
    console.log("B");

    const userId = user.customer?.userId || user.petsitter?.userId || "";

    return (
        <UsersContext.Provider value={{ user, userId }}>
            <div className="w-fit h-[72px] border border-t-0 border-bd-gray grid grid-cols-[174px_270px_240px_140px_135px_115px_80px]">
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{userId}</div>
                <TableUserCard src={""} firstname={user.firstname} lastname={user.lastname} />
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{user.email}</div>
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{formatDate(user.createdAt)}</div>
                <div className="flex justify-center items-center"><Role role_id={user.role} /></div>
                <div className="flex justify-center items-center px-[16px]"><AccountStatus account_status={user.accountStatus} /></div>
                <div className="flex justify-center items-center">{user.accountStatus == "INACTIVE" ? <BlockedOption /> : <DefaultOption />}</div>
            </div>
        </UsersContext.Provider>
    );
}

export function ViewReportsContent({ report }: {
    report: ReportModelResponse
}) {
    return (
        <ReportsContext.Provider value={report}>
            <div className="w-fit h-[72px] border border-t-0 border-bd-gray grid grid-cols-[174px_270px_270px_140px_220px_80px]">
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{report.id}</div>
                <TableUserCard src={""} firstname={report.reporter.firstname} lastname={report.reporter.lastname} />
                <TableUserCard src={""} firstname={report.reported.firstname} lastname={report.reported.lastname} />
                <div className="flex text-body text-standard-gray  pl-[16px] pr-[16px] justify-between items-center">{formatDate(report.createdAt)}</div>
                <div className="flex justify-center items-center"><Report report_type={report.type} /></div>
                <div className="flex justify-center items-center"><ReportOption /></div>
            </div>
        </ReportsContext.Provider>
    );
}

export function ViewApplicationsContent({ qualification }: {
    qualification: QualificationModelResponse
}) {

    return (
        <ApplicationsContext.Provider value={qualification} >
            <div className="w-fit h-[72px] border border-t-0 border-bd-gray grid grid-cols-[174px_270px_270px_220px_140px_80px]">
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{qualification.id.substring(0, 14)}</div>
                <TableUserCard firstname={qualification.firstname} lastname={qualification.lastname} />
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{qualification.email}</div>
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{qualification.phone}</div>
                <div className="flex text-body text-standard-gray pl-[16px] pr-[16px] justify-between items-center">{formatDate(qualification.createdAt)}</div>
                <div className="flex justify-center items-center"><ApplicationOption /></div>
            </div>
        </ApplicationsContext.Provider>
    );
}

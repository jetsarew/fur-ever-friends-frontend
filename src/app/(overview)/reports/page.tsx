'use client'

import { ViewReportsHeader } from "@/components/Admin/Card/Header"
import { ViewReportsContent } from "@/components/Admin/Card/Content"
import SearchBar from "@/components/Admin/Input/SearchBar"
import { ReportsFilter } from "@/components/Admin/Button/Filter"
import { useState, useEffect } from "react"
import { ReportModelResponse } from "@/types/response.type"
import { reportService } from "@/services/report.service"

export default function ReportsPage() {
    const [reports, setReports] = useState<ReportModelResponse[]>([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await reportService.getReports();
                setReports(response);
            } catch (error) {
                console.error("Failed to fetch reports:", error);
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="flex flex-col w-max top-[112px] left-[143px] gap-[32px]">
            <div className="flex gap-[16px]">
                <div>
                    <SearchBar />
                </div>
                <div className="pt-[16px]">
                    <ReportsFilter />
                </div>
            </div>
            <div>
                <ViewReportsHeader />
                {reports.map((report) => (
                    <ViewReportsContent
                        key={report.id}
                        report={report} />
                ))
                }
            </div>
        </div>
    )
}
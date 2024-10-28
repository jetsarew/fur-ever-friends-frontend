'use client'

// import Image from "next/image";
import { useState, useEffect } from "react";
import { reportService } from "@/services/report.service";
import { ReportModelResponse } from "@/types/response.type";

function reportMap(report_type: string) {
  switch (report_type) {
    case "SERVICE_QUALITY":
      return "Service Quality";
    case "CUSTOMER_BEHAVIOR":
      return "Neglet/Abuse";
    case "UNPROFESSIONAL_CONDUCT":
      return "Unprofessional behavior";
    case "INAPPROPRIATE_COMMUNICATION":
      return "Inappropriate Communication";
    case "OTHER":
      return "No Show";
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export default function ReportPage({ params }: {
  params: { id: string }
}) {
  const [report, setReport] = useState<ReportModelResponse>();

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await reportService.getReport(params.id);
        setReport(response);
      } catch (error) {
        console.error("Failed to fetch reports:", error);
      }
    };

    fetchReport();
  }, []);

  return (
    report && <div className="grid gap-[16px] w-[561px] border border-bd-gray rounded-[8px] py-[24px] px-[16px]">
      <div className="text-subheading text-bright-red">Report</div>
      {/* <div className="py-2 flex flex-row items-center gap-4">
        <Image
          src="/default_profile.jpg"
          width={80}
          height={80}
          alt="reported"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-body-bold"></p>
      </div> */}
      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Report type</div>
        <div className="text-body text-dark ">{reportMap(report.type)}</div>
      </div>

      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Description</div>
        <div className="text-small-paragraph text-paragraph-gray">
          {report.content}
        </div>
      </div>

      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Reported by</div>
        <div className="flex gap-[8px] items-center">
          <div className="w-[24px] h-[24px] rounded-[12px] border border-bright-blue"></div>
          <div className="text-body text-dark">{report.reporter.firstname} {report.reporter.lastname}</div>
        </div>
      </div>

      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Date</div>
        <div className="text-small text-standard-gray">{formatDate(report.createdAt)}</div>
      </div>
    </div>
  );
}

'use client'

import Image from "next/image";
import { getAttachmentSrc } from "@/hooks/useImage";
import { useState, useEffect } from "react";
import { reportService } from "@/services/report.service";
import { ActivityModelResponse, ReportModelResponse } from "@/types/response.type";
import { activityService } from "@/services/activity.service";
import { formatUTCDate } from "@/hooks/useConvertTime";
import PetSitterCard from "@/components/Card/PetSitterCard";
import { CalendarWithCheckIcon, CalendarIcon, LocationIcon } from "@/shared/Icon";
import PetActivityCard from "@/components/Card/PetActivityCard";
import { getStatePriority } from "@/hooks/useStatePriority";

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
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export default function ReportPage({ params }: {
  params: { id: string }
}) {
  console.log(params.id)
  const [report, setReport] = useState<ReportModelResponse>();
  const [activity, setActivity] = useState<ActivityModelResponse>();

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

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        if (report) {
          const response = await activityService.getActivityById(report.activity.id!);
          console.log(response);
          setActivity(response);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchActivity();
  }, []);

  return (
    report && activity &&
    <div>
      <p className="text-header text-bright-blue">{report.activity.title}</p>
      <div className="grid grid-cols-2">
        <div className="w-[561px] flex flex-col gap-8">
          {activity.petsitter != null && <PetSitterCard activity={activity} />}
          <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
            <h3 className="text-subheading text-dark-blue">Duration</h3>
            <div>
              <div className="pb-2 flex flex-row items-start gap-2 border-b border-bd-gray">
                <CalendarIcon />
                <div className="pt-2 flex flex-col gap-2">
                  <p className="text-body-bold">Start</p>
                  <p className="text-small text-soft-gray">{formatUTCDate(activity.startDateTime)}</p>
                </div>
              </div>
              <div className="pt-2 flex flex-row items-start gap-2">
                <CalendarWithCheckIcon />
                <div className="pt-2 flex flex-col gap-2">
                  <p className="text-body-bold">End</p>
                  <p className="text-small text-soft-gray">{formatUTCDate(activity.endDateTime)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
            <h3 className="text-subheading text-dark-blue">Location</h3>
            <div>
              <div className="flex flex-row items-start gap-2">
                <LocationIcon />
                <div className="pt-2 flex flex-col gap-2">
                  <p className="text-body-bold">{activity.pickupPoint}</p>
                  <p className="text-small-paragraph text-soft-gray">{activity.detail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-[16px] w-[561px] border border-bd-gray rounded-[8px] py-[24px] px-[16px]">
          <div className="text-subheading text-bright-red">Report</div>
          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Report type</div>
            <div className="text-body text-dark ">{reportMap(report.type)}</div>
            {/* <div className="text-body text-dark ">aaaa</div> */}
          </div>

          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Description</div>
            <div className="text-small-paragraph text-paragraph-gray">
              {report.content}
              {/* content */}
            </div>
          </div>

          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Reported by</div>
            <div className="flex gap-[8px] items-center">
              <Image
                src={getAttachmentSrc(report.reporter.avatar!)}
                width={186}
                height={186}
                alt={"/default_profile.jpg"}
                className="w-[24px] h-[24px] border border-bright-blue rounded-full object-cover"
              />
              <div className="text-body text-dark">{report.reporter.firstname} {report.reporter.lastname}</div>
              {/* <div className="text-body text-dark">firstname lastname</div> */}

            </div>
          </div>

          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Date</div>
            <div className="text-small text-standard-gray">{formatDate(report.createdAt)}</div>
            {/* <div className="text-small text-standard-gray">20/10/2024</div> */}
          </div>
        </div>
      </div>

      <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
        <h3 className="text-subheading text-dark-blue">Pet Activities</h3>
        <div className="flex flex-row justify-between items-center flex-wrap gap-8">
          {
            activity.services.map((service, index) => {
              return (
                <PetActivityCard
                  key={index}
                  service={service}
                  showCheckBox={false}
                  showProgressBar={getStatePriority(activity.state) >= getStatePriority("IN_PROGRESS")}
                  canUpdateTaskStatus={false}
                />
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

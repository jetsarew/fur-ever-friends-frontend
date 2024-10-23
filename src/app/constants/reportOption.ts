import { ReportType } from "@/dto/report.dto"

type optionElement = {
    label: string,
    value: ReportType,
}

export const reportOptions: optionElement[] = [
    {
        label: "Service Quality",
        value: "SERVICE_QUALITY"
    },
    {
        label: "Customer Behavior",
        value: "CUSTOMER_BEHAVIOR"
    },
    {
        label: "Unprofessional Conduct",
        value: "UNPROFESSIONAL_CONDUCT"
    },
    {
        label: "Inappropriate Communication",
        value: "INAPPROPRIATE_COMMUNICATION"
    },
    {
        label: "Other",
        value: "OTHER"
    },
]
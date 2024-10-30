import { ReportType } from "@/dto/report.dto";

export default function Report({ report_type }: {
    report_type: ReportType;
}) {
    let content;

    switch (report_type) {
        case "SERVICE_QUALITY":
            content = "Service Quality";
            break;
        case "CUSTOMER_BEHAVIOR":
            content = "Neglet/Abuse";
            break;
        case "UNPROFESSIONAL_CONDUCT":
            content = "Unprofessional Conduct";
            break;
        case "INAPPROPRIATE_COMMUNICATION":
            content = "Inappropriate Communication";
            break;
        case "OTHER":
            content = "No Show";
            break;
    }

    // switch (report_type) {
    //     case 0:
    //         content = "Unprofessional Behavior";
    //         break;
    //     case 1:
    //         content = "Neglet/Abuse";
    //         break;
    //     case 2:
    //         content = "No Show";
    //         break;
    //     case 3:
    //         content = "Service Quality";
    //         break;
    //     case 4:
    //         content = "Policy Violation";
    //         break;
    // }

    return (<div className="text-body-bold text-dark">{content}</div>);
}
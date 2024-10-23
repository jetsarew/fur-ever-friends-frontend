export type CreateReportDto = {
    type: ReportType;
    content: string;
    reporterId: string;
    reportedId: string;
    reportImages?: File[];
}

export type ReportType = 
    "SERVICE_QUALITY" |
    "CUSTOMER_BEHAVIOR" |
    "UNPROFESSIONAL_CONDUCT" |
    "INAPPROPRIATE_COMMUNICATION" |
    "OTHER";
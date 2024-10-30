export default function ApplicationStatus({ application_status }: {
    application_status: string;
}) {
    if (application_status === "PENDING") {
        return <div className="text-body text-bold text-dark">
            {application_status}
        </div>;
    } else if (application_status === "ACCEPTED") {
        return <div className="text-body text-bold text-bright-green">
            {application_status}
        </div>;
    } else if (application_status === "REJECTED") {
        return <div className="text-body text-bold text-bright-red">
            {application_status}
        </div>;
    }
}
export default function AccountStatus({ account_status }: {
    account_status: string;
}) {
    return (<div className={`${account_status == "INACTIVE" ? "text-body text-bright-red" : "text-bright-green"}`}>
        {account_status == "INACTIVE" ? "Blocked" : "Enabled"}
    </div>);
}
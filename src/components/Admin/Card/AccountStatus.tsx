export default function AccountStatus({ account_status }: {
    account_status: number;
}) {
    return (<div className={`${account_status == 0 ? " text-body text-bright-red" : "text-bright-green"}`}>
        {account_status == 0 ? "Blocked" : "Enabled"}
    </div>);
}
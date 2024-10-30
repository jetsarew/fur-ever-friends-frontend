export default function Role({ role_id }: {
    role_id: string;
}) {
    return (<div className={`text-body-bold text-white flex w-fit h-fit justify-center items-center pt-[12px] pb-[12px] pl-[16px] pr-[16px] rounded-[50px] ${role_id == "CUSTOMER" ? "bg-golden-yellow" : "bg-bright-blue"}`}>
        {role_id == "CUSTOMER" ? "Pet owner" : "Pet sitter"}
    </div>);
}
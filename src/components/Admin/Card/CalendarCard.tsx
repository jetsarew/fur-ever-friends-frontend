import { CalendarIcon } from "@/shared/Icon";

export default function CalendarCard({ date }: {
    date: string;
}) {
    return (
        <div className="flex items-center h-[46px] w-[148px] py-[15px] px-[18px] gap-[8px] rounded-[8px] border border-light-gray2 cursor-pointer select-none">
            <div className="text-body text-dark">{date}</div>
            <CalendarIcon />
        </div>
    );
}
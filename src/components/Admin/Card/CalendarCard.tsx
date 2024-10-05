export default function CalendarCard({ defaultDate }: {
    defaultDate: number;
}) {
    const getDateAfterDays = (days: number) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    };

    return (
        <div className="flex justify-center items-center h-[46px] w-[148px] rounded-[8px] border border-light-gray2 cursor-pointer select-none">
            <input type="date" defaultValue={getDateAfterDays(defaultDate)} className="w-[120px] cursor-pointer" />
        </div>
    );
}
export default function CalendarCard({ }) {
    return (
        <div className="flex justify-center items-center h-[46px] w-[148px] rounded-[8px] border border-light-gray2 cursor-pointer select-none">
            {/* <div className="text-body text-dark">{date}</div> */}
            {/* <CalendarIcon /> */}
            <input type="date" className="w-[120px] cursor-pointer" />
        </div>
    );
}
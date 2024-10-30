interface TagProps {
    icon: JSX.Element;
    text: string;
    quantity?: number;
    type: "animal" | "service";
}


export default function Tag({ icon, text, quantity, type } : TagProps){
    return (
        <div className="flex flex-row items-center gap-1">
            <div className={`h-9 px-4 py-2 flex flex-row items-center gap-2 border-[2px] ${type == "animal" ? "border-bright-blue" : "border-dark-blue"} rounded-full`}>
                {icon}
                <p className={`text-body ${type == "animal" ? "text-bright-blue" : "text-dark-blue"}`}>{text}</p>   
            </div>
            {quantity && <p className="text-body text-medium-gray">{"x" + quantity}</p>}
        </div>
    );
}
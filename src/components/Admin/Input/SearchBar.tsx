import { SearchIcon } from "@/shared/Icon";

export default function SearchBar() {
    return (<div className="flex w-[324px] border border-bright-blue rounded-[8px] p-[16px] gap-[16px]">
        <div className="w-[16px] h-[16px]"><SearchIcon /></div>
    </div>);
}
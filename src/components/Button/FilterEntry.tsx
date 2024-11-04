import { BoxIcon, CheckboxIcon } from "@/shared/Icon";
import ValidatedInput from "../Input/ValidatedInput";

interface FilterEntryInterface {
    borderBottom: boolean;
    value: number | null;
    onCheckBoxClicked: () => void;
    onValueChanged: (val: number) => void;
    max?: number;
    min? :number;
    label: string;
    unit: string; 
}

export default function FilterEntry({ borderBottom, value, onCheckBoxClicked, onValueChanged, max, min, label, unit }: FilterEntryInterface) {

  return (
    <div className={`py-3 flex flex-col gap-2 ${borderBottom && "border-b border-[#d9d9d9]"}`}>
      <div className="flex flex-row gap-2">
        <button
          type="button"
          className={"hover:cursor-pointer"}
          onClick={onCheckBoxClicked}
        >
          {
            value != null ?
            <CheckboxIcon /> :
            <BoxIcon />
          }
        </button>
        <p className="text-body-bold">{label}</p>
      </div>
      {
        value != null ?
        <div className="pl-6 flex flex-row items-center gap-2">
            <p>within</p>
            <ValidatedInput 
                type="number"
                value={value}
                onChange={(e) => onValueChanged(Number(e.target.value))}
                containerStyle="w-[70px]"
                max={max}
                min={min}
            />
            <p>{unit}</p>
        </div> : null
      }
    </div>
  );
}

"use client";

import { InputProps } from "@/types/input.type";

export default function ValidatedInput(props: InputProps) {
    
  return (
    <div className={props.containerStyle}>
      <label htmlFor="password" className={props.labelStyle}>
        {props.label}
        <span className={`${props.labelStyle} text-red-500`}>{props.error && "*"}</span>
      </label>
      <input
        className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
        name={props.label}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && props.errorMessage && (
        <div className="absolute top-[105%] right-0 text-small text-red-500">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

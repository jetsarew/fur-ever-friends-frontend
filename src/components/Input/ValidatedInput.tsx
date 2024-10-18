"use client";

import { InputProps } from "@/types/input.type";

export default function ValidatedInput(props: InputProps) {
    
  return (
    <div className={props.containerStyle}>
      <label htmlFor="password" className={props.labelStyle}>
        {props.label}
        <span className={`${props.labelStyle} text-red-500`}>{props.error && "*"}</span>
      </label>
      {
        props.type == "textarea" ?
        <textarea 
          name={props.label}
          value={props.value}
          onChange={props.onTextAreaChange}
          className={`w-full ${props.height} py-[15px] px-[18px] border border-bd-gray rounded-lg text-body-paragraph focus:outline-none focus:border-bright-blue resize-none`}
        />
        :
        <input
          className="w-full text-body py-[15px] px-[18px] border border-bd-gray rounded-lg focus:outline-none focus:border-bright-blue"
          name={props.label}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      }
      
      {props.error && props.errorMessage && (
        <div className="text-end text-wrap absolute top-[105%] right-0 text-small text-red-500">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

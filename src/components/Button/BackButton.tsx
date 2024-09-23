'use client';
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function BackButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const onMouseEnter = () => {
    const button = buttonRef.current;
    if (button) {
      const paragraph = button.querySelector("p");
      const svgPath = button.querySelector("path");

      if (paragraph) {
        paragraph.style.color = "#1C7DBB";
      }

      if (svgPath) {
        svgPath.style.stroke = "#1C7DBB";
      }
    }
  }
  const onMouseLeave = () => {
    const button = buttonRef.current;
    if (button) {
      const paragraph = button.querySelector("p");
      const svgPath = button.querySelector("path");

      if (paragraph) {
        paragraph.style.color = "#1D9BF0";
      }

      if (svgPath) {
        svgPath.style.stroke = "#1D9BF0";
      }
    }
  }
  const handleClick = () => {
    router.back();
  };
  return (
    <button 
        className="flex flex-row items-center gap-1"
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        onClick={() => handleClick()}
        ref={buttonRef}
    >
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 20.4201L8.48003 13.9001C7.71003 13.1301 7.71003 11.8701 8.48003 11.1001L15 4.58008"
          stroke="#1D9BF0"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-button text-bright-blue">Back</p>
    </button>
  );
}
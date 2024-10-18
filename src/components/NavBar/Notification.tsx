"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { BellIcon } from "@/shared/Icon";
//import NotificationCard from "../Card/NotificationCard";
import Image from "next/image";

export default function Notification() {
  const [show, setShow] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const popUpRef = useRef<HTMLDivElement>(null);

  useOutSideClick(buttonRef, popUpRef, setShow);

  return (
    <div className="relative">
      <div
        ref={buttonRef}
        className="hover:cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <BellIcon />
      </div>
      {show && (
        <div
          ref={popUpRef}
          className="w-[369px] max-h-[389.33px] flex flex-col justify-center items-start border border-bd-gray rounded-lg pop-up-shadow bg-white absolute top-[47px] right-0"
        >
          <div className="py-8 w-full flex flex-col justify-center items-center gap-4">
            <Image
              src={"/empty-inbox.svg"}
              width={150}
              height={150}
              alt={"empty cover image"}
            />
            <p className="text-body text-center text-soft-gray">
                Nothing to see here!
            </p>
          </div>

          {/* <NotificationCard clickHandler={() => setShow(false)}/>
                    <NotificationCard clickHandler={() => setShow(false)}/>
                    <NotificationCard clickHandler={() => setShow(false)}/>
                    <NotificationCard clickHandler={() => setShow(false)}/> */}
        </div>
      )}
    </div>
  );
}

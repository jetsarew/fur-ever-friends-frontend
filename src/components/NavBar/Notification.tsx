"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";
import { BellIcon } from "@/shared/Icon";
import Image from "next/image";
import { NotificationModelResponse } from "@/types/response.type";
import { notificationService } from "@/services/notification.service";
import { Toast } from "../Toast/Toast";
import NotificationCard from "../Card/NotificationCard";

export default function Notification() {
  const [show, setShow] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const popUpRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState<NotificationModelResponse[]>([]);

  useOutSideClick(buttonRef, popUpRef, setShow);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await notificationService.getNotifications();
        setNotifications(response);
        console.log(response);
      } catch(error) {
        if(error) {
            Toast(error as string, "error");
        }
        else {
            Toast("Failed to get notifications.", "error");
        }
      }
    }

    fetchNotification();
  }, []);

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
          className="w-[369px] max-h-[389.33px] flex flex-col items-start border border-bd-gray rounded-lg pop-up-shadow bg-white absolute top-[47px] right-0 overflow-y-auto"
        >
          {
            notifications.length == 0 &&
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
          }
          {
            notifications.map((notification, index) => {
              return <NotificationCard key={index} notification={notification} clickHandler={() => setShow(false)}/>
            })
          }
        </div>
      )}
    </div>
  );
}

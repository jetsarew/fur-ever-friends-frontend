"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { deleteAuthState } from "@/store/auth/auth.slice";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { getAttachmentSrc } from "@/hooks/useImage";

export default function ProfileImage() {
  const [show, setShow] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const popUpRef = useRef<HTMLDivElement>(null);

  const userData = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useOutSideClick(buttonRef, popUpRef, setShow);

  const onLogOutButtonClicked = async () => {
    try {
      console.log("logggggggg");
      await authService.logout();
      //Cookies.remove("token");
      console.log("loeffdssfdggg");
      dispatch(deleteAuthState());
      setShow(false);
      router.push("/");
    } catch(error) {
      console.error(error);
      // Cookies.remove("token");
      // setShow(false);
      //router.push("/");
    }
    
  };

  console.log(userData);
  return (
    <div className="relative">
      <div ref={buttonRef}>
        <Image
          src={userData?.avatar ? getAttachmentSrc(userData.avatar) : "/default_profile.jpg"}
          width={144}
          height={144}
          alt={"profile image"}
          className="w-12 h-12 rounded-full object-cover hover:cursor-pointer"
          onClick={() => setShow(!show)}
        />
      </div>
      {show && (
        <div
          ref={popUpRef}
          className="w-[220px] flex flex-col items-start border border-bd-gray rounded-lg pop-up-shadow bg-white absolute top-[55px] right-0"
        >
          <div className="w-full px-6 py-4 flex flex-col items-start gap-2 border-b border-bd-gray">
            <p className="text-body">
              {userData?.firstname + " " + userData?.lastname}
            </p>
            <p className="text-small text-standard-gray">{userData?.email}</p>
          </div>
          {userData?.role == "PETSITTER" && (
            <Link
              href={`/profile/${userData?.id}`}
              className="w-full px-6 py-3 hover:bg-[#F8F8F8]"
              onClick={() => setShow(false)}
            >
              My profile
            </Link>
          )}
          <Link
            href={`/profile/${userData?.id}/edit`}
            className="w-full px-6 py-3 hover:bg-[#F8F8F8]"
            onClick={() => setShow(false)}
          >
            Edit profile
          </Link>
          {userData?.role == "CUSTOMER" && (
            <Link
              href="/favorite"
              className="w-full px-6 py-3 hover:bg-[#F8F8F8]"
              onClick={() => setShow(false)}
            >
              Favorite pet sitter
            </Link>
          )}
          <button
            type="button"
            className="w-full px-6 py-3 text-left hover:bg-[#F8F8F8]"
            onClick={onLogOutButtonClicked}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

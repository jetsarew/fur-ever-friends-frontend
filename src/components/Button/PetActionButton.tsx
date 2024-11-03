"use client";

import useOutSideClick from "@/hooks/useOutsideClick";
import { BinIcon, PencilIcon, ThreeDotIcon } from "@/shared/Icon";
import Link from "next/link";
import { useRef, useState } from "react";

interface PetActionButtonInterface {
  petId: string;
}

export default function PetActionButton({ petId }: PetActionButtonInterface) {
  const [visible, setVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const popUpRef = useRef<HTMLDivElement>(null);

  useOutSideClick(buttonRef, popUpRef, setVisible);

  return (
    <div className="absolute top-3 right-3">
      <div ref={buttonRef} onClick={() => setVisible(!visible)} className="hover:cursor-pointer">
        <ThreeDotIcon />
      </div>
      { visible &&
        <div ref={popUpRef} className="absolute top-0 left-0 flex flex-col border border-bd-gray rounded-xl bg-white shadow-custom z-[5]">
          <Link
            href={`/pet/edit/${petId}`}
            className="px-4 py-3 flex flex-row gap-3 hover:bg-[#F8F8F8]"
          >
            <PencilIcon />
            <p className="text-body-bold text-soft-gray">edit</p>
          </Link>
          <Link
            href={`/compose/delete-pet/${petId}`}
            className="px-4 py-3 flex flex-row gap-3 hover:bg-[#F8F8F8]"
          >
            <BinIcon />
            <p className="text-body-bold text-soft-gray">delete</p>
          </Link>
        </div>
      }
    </div>
  );
}

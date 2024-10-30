"use client";

import {
  FavoriteModelResponse,
} from "@/types/response.type";
import { useState } from "react";
import { Toast } from "../Toast/Toast";
import { activityService } from "@/services/activity.service";
import Image from "next/image";
import { getAttachmentSrc } from "@/hooks/useImage";

interface FavoriteEntryInterface {
  favorite: FavoriteModelResponse;
  activityId: string;
}

export default function FavoriteEntry({
  activityId,
  favorite,
}: FavoriteEntryInterface) {
  const [invited, setInvited] = useState<boolean>(false);

  const onButtonClicked = async () => {
    if (invited == false) {
      try {
        await activityService.invitePetSitter(activityId, {
          petsitterId: favorite.petsitter.user.id,
        });
      } catch (error) {
        Toast("Failed to invite pet sitter to this activity.", "error");
      }
    }
    setInvited(true);
  };

  return (
    <div className="w-full px-6 py-3 flex flex-row justify-between items-center hover:bg-[#F8F8F8]">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={
            favorite.petsitter.user.avatar
              ? getAttachmentSrc(favorite.petsitter.user.avatar)
              : "default_profile.jpg"
          }
          width={80}
          height={80}
          alt="pet sitter profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p>{favorite.petsitter.user.firstname}</p>
      </div>
      <button
        type="button"
        onClick={onButtonClicked}
        className={`w-[81.15px] px-6 py-2 flex flex-row justify-center items-center rounded-lg ${
          invited
            ? "text-body-bold text-soft-gray"
            : "text-button text-white bg-bright-blue"
        }`}
      >
        {invited ? "Invited" : "Invite"}
      </button>
    </div>
  );
}

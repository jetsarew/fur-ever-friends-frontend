"use client";

import PetOwnerEditProfilePage from "@/components/Page/PetOwnerEditProfilePage";
import PetSitterEditProfilePage from "@/components/Page/PetSitterEditProfilePage";
import { useAppSelector } from "@/store/hooks";

export default function ProfilePage() {
  const userData = useAppSelector((state) => state.auth.user);
  return (
    userData?.role == "PETSITTER" ?
      <PetSitterEditProfilePage /> :
      <PetOwnerEditProfilePage />
  );
}

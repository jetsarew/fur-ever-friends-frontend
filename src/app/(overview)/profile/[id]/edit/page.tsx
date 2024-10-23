"use client";

import PetOwnerEditProfilePage from "@/components/Page/PetOwnerEditProfilePage";
import PetSitterEditProfilePage from "@/components/Page/PetSitterEditProfilePage";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage({ params }: {
  params: { id: string }
}) {
  const userData = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if(userData?.id!= params.id){
      router.back();
    }
  }, [params.id])

  return (
    userData?.role == "CUSTOMER" ?
    <PetOwnerEditProfilePage /> :
    <PetSitterEditProfilePage />
  );
}

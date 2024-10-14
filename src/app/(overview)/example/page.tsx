"use client";

import { useUser } from "@/hooks/useUser";
import { qualificationService } from "@/services/qualification.service";
import { userService } from "@/services/user.service";
import { setAuthUser } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";;

export default function Home() {
  const { updateUserMutation } = useUser();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.user);

  const onAcceptPetSitterButtonClicked = async () => {
    const response = await userService.createPetSitter("suzana@gmail.com");
    console.log(response);
  };

  // const onGetAuthUserButtonClicked = async () => {
  //   const response = await userService.getAuthUser();
  //   console.log(response);
  // }

  const onUpdatePetOwnerProfileButtonClicked = async () => {
    const response = await updateUserMutation.mutateAsync({
      role: "CUSTOMER",
      userId: userData?.id,
      userData: {
        firstname: "Suchata2",
      },
    });
    if (response) {
      dispatch(setAuthUser(response));
    }
    console.log(response);
  };

  const onGetAuthUserButtonClicked = async () => {
    const response = await userService.getAuthUser();
    console.log(response);
  };

  const onGetUserButtonClicked = async () => {
    const response = await userService.getUser(
      "df5126d5-cb15-463c-84bd-376b94927cfe"
    );
    console.log(response);

    const response2 = await userService.getAllUser();
    console.log(response2);
  };

  const onGetQualificationsClicked = async () => {
    const response = await qualificationService.getQualifications();
    console.log(response);
  };

  return (
    <div className="">
      Landing Page
      <div className="flex flex-col gap-8 items-start">
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onAcceptPetSitterButtonClicked}
        >
          Create pet sitter
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onGetAuthUserButtonClicked}
        >
          Get auth user
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onUpdatePetOwnerProfileButtonClicked}
        >
          Update
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onGetUserButtonClicked}
        >
          Get User
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onGetQualificationsClicked}
        >
          Get Qualifications
        </button>
      </div>
    </div>
  );
}

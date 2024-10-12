"use client";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import { authService } from "@/services/auth.service";
import { qualificationService } from "@/services/qualification.service";
import { userService } from "@/services/user.service";
import { deleteAuthState, setAuthUser } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Cookies from "js-cookie";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File>();
  const { registerMutation } = useAuth();
  const { updateUserMutation } = useUser();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.user);

  const onButtonClick = async () => {
    const response = await authService.login({
      email: "suchata@gmail.com",
      password: "12345678",
    });
    console.log(response);
    dispatch(setAuthUser(response.user));
    Cookies.set("token", response.token.accessToken);
  };

  const onFileUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setFile(files[0]);
    }
  };

  const onButtonClick2 = async () => {
    if (!file) return;

    const response = await qualificationService.sendQualification({
      email: "match@gmail.com",
      password: "12345678",
      firstname: "Matcha",
      lastname: "Fish",
      phone: "0123456789",
      file: file,
    });
    console.log(response);
  };

  const onLogoutButtonClicked = async () => {
    // await authService.logout({
    //   headers: {
    //     Authorization: `Bearer ${userData?.refreshToken}`,
    //   },
    // });
    Cookies.remove("token");
    dispatch(deleteAuthState());
  };

  const onRegisterButtonClicked = async () => {
    const response = await registerMutation.mutateAsync({
      email: "maithai@gmail.com",
      password: "12345678",
      firstname: "Maithai",
      lastname: "Suriyayunyong",
      phone: "0123456789",
      role: "CUSTOMER",
    });
    // const response = await authService.register({
    //   email: "min@gmail.com",
    //   password: "12345678",
    //   firstname: "Min",
    //   lastname: "Planet",
    //   phone: "0123456789",
    //   role: "CUSTOMER",
    // });
    console.log(response);
    dispatch(setAuthUser(response.user));
    Cookies.set("token", response.token.accessToken);
  };

  const onCreatePetSitterButtonClicked = async () => {
    const response = await userService.createPetSitter("suzana@gmail.com");
    console.log(response);
  };

  // const onGetAuthUserButtonClicked = async () => {
  //   const response = await userService.getAuthUser();
  //   console.log(response);
  // }

  const onUpdateButtonClicked = async () => {
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

  const onUGetUserButtonClicked = async () => {
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
          onClick={onRegisterButtonClicked}
        >
          Register
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onButtonClick}
        >
          Login
        </button>
        <input type="file" onChange={onFileUploaded}></input>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onButtonClick2}
        >
          submit Qualification
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onLogoutButtonClicked}
        >
          log out
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onCreatePetSitterButtonClicked}
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
          onClick={onUpdateButtonClicked}
        >
          Update
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onUGetUserButtonClicked}
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

"use client";
import { UpdatePetDto } from "@/dto/pet.dto";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import { authService } from "@/services/auth.service";
import { customerService } from "@/services/customer.service";
import { petService } from "@/services/pet.service";
import { qualificationService } from "@/services/qualification.service";
import { userService } from "@/services/user.service";
import { deleteAuthState, setAuthUser } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Cookies from "js-cookie";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [petFile, setPetFile] = useState<File>();
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

  const onPetFileUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setPetFile(files[0]);
    }
  };

  const onCreatePet = async () => {
    if (!petFile) return;

    const response = await petService.createPet({
      ownerId: "95d3ccd2-07e9-4ca7-8833-0914ed99bb15",
      name: "Nawat",
      age: 5,
      weight: 30,
      gender: "MALE",
      personality:
        "Friendly, loyal, loves outdoor activities, and is great with children.",
      allergy: "Wheat, chicken, soy.",
      otherDetail:
        "Buddy has hip dysplasia and requires joint supplements to maintain mobility.",
      animalTypeId: "3c7d4c5d-8299-44cb-81fb-83233375b952",
      breedId: "5fea3fcb-a4ab-4a31-82e1-d63a717d250a",
      imageUrl: petFile.name,
      file: petFile,
    });
    console.log(response);
  };

  const onGetPetButtonClicked = async () => {
    const response = await petService.getPet(
      "02ccc77d-509e-4acf-98be-f5b7f66c405c"
    );
    console.log(response);

    const response2 = await petService.getAllPet();
    console.log(response2);

    const response3 = await petService.getPetsByOwner(
      "0679aaf6-d2f4-40f5-96f4-1c3ac1d0442e"
    );
    console.log(response3);
  };

  const onUpdatePetButtonClicked = async () => {
    const updateDto: UpdatePetDto = {
      name: "Buddy" + Math.floor(Math.random() * 100),
    };
    if (petFile) {
      updateDto.imageUrl = petFile.name;
      updateDto.file = petFile;
    }
    const response = await petService.updatePet(
      "02ccc77d-509e-4acf-98be-f5b7f66c405c",
      {
        name: "Buddy" + Math.floor(Math.random() * 100),
      }
    );

    console.log(response);
  };

  const onCustomerButtonClicked = async () => {
    const response = await customerService.getAllCustomer();
    console.log(response);

    const response2 = await customerService.getCustomer("95d3ccd2-07e9-4ca7-8833-0914ed99bb15");
    console.log(response2);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-bright-green">
        <p className="text-header text-bright-green">Auth Service</p>
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
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onLogoutButtonClicked}
        >
          Log out
        </button>
      </div>
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-golden-yellow">
      <p className="text-header text-golden-yellow">User Service</p>
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
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-bright-blue">
        <p className="text-header text-bright-blue">Pet Service</p>
        <input type="file" onChange={onPetFileUploaded}></input>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onCreatePet}
        >
          Create pet
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onGetPetButtonClicked}
        >
          Get pet
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onUpdatePetButtonClicked}
        >
          Update pet
        </button>
      </div>
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-orange-500">
        <p className="text-header text-orange-500">Customer Service</p>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onCustomerButtonClicked}
        >
          Get customer
        </button>
    </div>
    </div>
  );
}

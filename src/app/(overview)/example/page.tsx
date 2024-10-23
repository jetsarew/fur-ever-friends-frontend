"use client";

//import { UpdatePetDto } from "@/dto/pet.dto";
import { useUser } from "@/hooks/useUser";
import { adminService } from "@/services/adminService";
import { customerService } from "@/services/customer.service";
import { petService } from "@/services/pet.service";
import { qualificationService } from "@/services/qualification.service";
import { userService } from "@/services/user.service";
import { setAuthUser } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
//import { useState } from "react";
export default function Home() {
  //const [petFile, setPetFile] = useState<File>();
  const { updateUserMutation } = useUser();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.user);

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

    const response2 = await qualificationService.getQualification("8e945896-ae79-4048-9714-ec2e6bd0a165");
    console.log(response2);
  };

  const onAcceptQualificationClick = async () => {
    const response = await userService.createPetSitter("engfa@gmail.com");
    console.log(response);
  };
  const onRejectQualificationClick = async () => {
    const response = await qualificationService.updateQualification("ddfd9249-a3c3-4b37-8ccb-10c08a7df934", {state: "REJECTED"})
    console.log(response);
  };

  const onGetPetButtonClicked = async () => {

    const response = await petService.getPet("e7594d44-569a-4948-bde9-10a99676e6bf");
    console.log(response);

    const response2 = await petService.getAllPet();
    console.log(response2);

    const ownerId:string = (userData && userData.customer) ? userData.customer.id : "953a660c-3a03-4d74-9bbf-bdb5717d35b9";
    const response3 = await petService.getPetsByOwner(ownerId);
    console.log(response3);
  };

  // const onUpdatePetButtonClicked = async () => {
  //   const updateDto: UpdatePetDto = {
  //     name: "Buddy" + Math.floor(Math.random() * 100),
  //   };
  //   if (petFile) {
  //     updateDto.imageUrl = petFile.name;
  //     updateDto.file = petFile;
  //   }
  //   const response = await petService.updatePet(
  //     "02ccc77d-509e-4acf-98be-f5b7f66c405c",
  //     {
  //       name: "Buddy" + Math.floor(Math.random() * 100),
  //     }
  //   );
  //   console.log(response);
  // };

  const onCustomerButtonClicked = async () => {
    const response = await customerService.getAllCustomer();
    console.log(response);
    const response2 = await customerService.getCustomer("95d3ccd2-07e9-4ca7-8833-0914ed99bb15");
    console.log(response2);
  }

  const onSetAccountStateButtonClicked = async () => {
    const response = await adminService.setAccountState("5116ecb6-3761-4b6c-b097-3dd3614ad49b", "BANNED");
    console.log(response);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-golden-yellow">
      <p className="text-header text-golden-yellow">User Service</p>
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
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onAcceptQualificationClick}
        >
          Accept Qualification
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onRejectQualificationClick}
        >
          Reject Qualification
        </button>
      </div>
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-bright-blue">
        <p className="text-header text-bright-blue">Pet Service</p>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onGetPetButtonClicked}
        >
          Get pet
        </button>
        {/* <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onUpdatePetButtonClicked}
        >
          Update pet
        </button> */}
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
    <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-pink-500">
        <p className="text-header text-pink-500">Admin Service</p>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onSetAccountStateButtonClicked}
        >
          Set account state
        </button>
    </div>
    </div>
  );
}
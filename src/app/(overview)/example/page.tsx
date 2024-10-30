"use client";

import { activityService } from "@/services/activity.service";
import { adminService } from "@/services/adminService";
import { customerService } from "@/services/customer.service";
import { petService } from "@/services/pet.service";
import { qualificationService } from "@/services/qualification.service";
import { reportService } from "@/services/report.service";
import { requestService } from "@/services/request.service";
import { reviewService } from "@/services/review.service";
import { userService } from "@/services/user.service";
//import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

export default function Home() {

  //const userData = useAppSelector((state) => state.auth.user);
  const [progressImage, setProgressImage] = useState<File | null>(null);

  const onGetAuthUserButtonClicked = async () => {
    const response = await userService.getAuthUser();
    console.log(response);
  };

  const onGetUserButtonClicked = async () => {
    const response2 = await userService.getAllUser(``);
    console.log(response2);

    const response = await userService.getUser(
      "df5126d5-cb15-463c-84bd-376b94927cfe"
    );
    console.log(response);
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
    const response = await qualificationService.updateQualification("ddfd9249-a3c3-4b37-8ccb-10c08a7df934", { state: "REJECTED" })
    console.log(response);
  };

  const onGetPetButtonClicked = async () => {

    const response = await petService.getPet("e7594d44-569a-4948-bde9-10a99676e6bf");
    console.log(response);

    const response2 = await petService.getAllPet();
    console.log(response2);

    const response3 = await petService.getPetsByOwner();
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

  const onGetReportButtonClicked = async () => {
    const response = await reportService.getReports();
    console.log(response);

    const response2 = await reportService.getReport("c6f96f56-ed59-4010-ba26-789e160dee89");
    console.log(response2);
  }

  const onUpdateActivityStateButtonClicked = async () => {
    const response = await activityService.updateActivityState("6107c245-e070-47e1-8762-7ac678ee1527", {
      state: "COMPLETED"
    });
    console.log(response);
  }

  const onReviewButtonClicked = async () => {
    const response = await reviewService.reviewActivity({
      activityId: "6107c245-e070-47e1-8762-7ac678ee1527",
      petsitterId: "dbfcdc4b-d3d1-4817-a98c-f5c9ae4f5ae3",
      content: "Good",
      rating: 4,
    });
    console.log(response);
  }

  const onCreateRequestButtonClicked = async () => {
    const response = await requestService.createRequest({
      activityId: "c7ef88d7-fa3e-401f-8ec1-077cac6842bb",
      price: 50,
      message: "Absolutely stunning!",
    })
    console.log(response);
  }

  const onAcceptRequestButtonClicked = async () => {
    const response = await requestService.acceptRequest("b53b0e61-1b19-4c76-aaad-651c63f844e4");
    console.log(response);
  }

  const onFileUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setProgressImage(files[0]);
    }
  };

  const onUpdateProgressButtonClicked = async () => {
    if (!progressImage) return;
    const response = await activityService.createProgress("f89dce91-dbd1-4d7a-8c38-064f967035b1", {
      progresses: progressImage,
      content: "This is a progress."
    });
    console.log(response);
  }

  const onGetProgressButtonClicked = async () => {
    const response = await activityService.getProgressesByActivityId("17db7094-814c-4f86-86c1-692df717c90f");
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
          onClick={onGetUserButtonClicked}
        >
          Get User
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
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
          type="button"
          onClick={onSetAccountStateButtonClicked}
        >
          Set account state
        </button>
      </div>
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-red-500">
        <p className="text-header text-red-500">Report Service</p>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-red-500"
          type="button"
          onClick={onGetReportButtonClicked}
        >
          Get Report
        </button>
      </div>
      <div className="px-8 py-8 flex flex-col gap-8 items-start border-[2px] border-green-500">
        <p className="text-header text-green-500">Activity Service</p>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-green-500"
          type="button"
          onClick={onUpdateActivityStateButtonClicked}
        >
          Update Activity State
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-green-500"
          type="button"
          onClick={onReviewButtonClicked}
        >
          Review
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-green-500"
          type="button"
          onClick={onCreateRequestButtonClicked}
        >
          Send Request
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-green-500"
          type="button"
          onClick={onAcceptRequestButtonClicked}
        >
          Accept Request
        </button>
        <input
          type="file"
          onChange={onFileUploaded}
        />
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-green-500"
          type="button"
          onClick={onUpdateProgressButtonClicked}
        >
          Update Progress
        </button>
        <button
          className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-green-500"
          type="button"
          onClick={onGetProgressButtonClicked}
        >
          Get Progress
        </button>
      </div>
    </div>

  );
}
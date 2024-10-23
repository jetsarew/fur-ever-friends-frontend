"use client";
import {
  updateProfileValidationSchema,
  UpdateProfileValues,
} from "@/app/constants/formik/updatePetOwnerProfile.formik";
import { UpdatePetOwnerDto } from "@/dto/auth.dto";
import { getAttachmentSrc } from "@/hooks/useImage";
import { useUser } from "@/hooks/useUser";
import { useAppSelector } from "@/store/hooks";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { Toast } from "../Toast/Toast";
import { getFieldProps } from "@/utils/getFieldProps";
import ValidatedInput from "../Input/ValidatedInput";

export default function PetOwnerEditProfilePage() {
  const userData = useAppSelector((state) => state.auth.user);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const { updateUserMutation } = useUser();

  const onProfileImageUploaded = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (files?.length) {
      const objectUrl = URL.createObjectURL(files[0]);
      formik.setFieldValue("avatar", objectUrl);

      setProfileImage(files[0]);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const updateData: UpdatePetOwnerDto = {
        userId: userData?.id,
        firstname: formik.values.firstname,
        lastname: formik.values.lastname,
        phone: formik.values.phone,
        role: "CUSTOMER",
      };
      if (profileImage) {
        updateData.avatarFile = profileImage;
      }
      const response = await updateUserMutation.mutateAsync(updateData);
      console.log(response);
      Toast("Your profile has been updated.", "success");
    } catch (error) {
      Toast("Failed to update profile.", "error");
    }
  };

  const formik = useFormik<UpdateProfileValues>({
    initialValues: {
      firstname: userData?.firstname ?? "",
      lastname: userData?.lastname ?? "",
      phone: userData?.phone ?? "",
      avatar: userData?.avatar
        ? getAttachmentSrc(userData.avatar)
        : "/default_profile.jpg",
    },
    validationSchema: updateProfileValidationSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: handleUpdateProfile,
  });

  const firstnameInputProps = getFieldProps(formik, "firstname");
  const lastnameInputProps = getFieldProps(formik, "lastname");
  const phoneInputProps = getFieldProps(formik, "phone");

  return (
    <div className="container mx-auto">
      <div>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center gap-8"
        >
          <div>
            <label
              htmlFor="upload-image"
              className="flex flex-col items-center"
            >
              <div className="mb-4 w-[150px] h-[150px] rounded-full border-4 border-bright-blue overflow-hidden items-center">
                <Image
                  id="profile-image"
                  src={formik.values.avatar ?? "/default_profile.jpg"}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover items-center "
                  alt="profile image"
                />
              </div>
              <div className="relative flex flex-row justify-center items-center text-white bg-bright-blue rounded-[8px] w-[163px] h-[32px] justify-self-center px-6 text-button cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={onProfileImageUploaded}
                  className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer opacity-0"
                />
                Upload Image
              </div>
            </label>
          </div>

          <ValidatedInput
            {...firstnameInputProps}
            label="First Name"
            containerStyle="relative w-[680px] flex flex-col gap-3"
            labelStyle="text-subheading2 text-dark-blue"
            value={formik.values.firstname}
            onChange={(e) => formik.setFieldValue("firstname", e.target.value)}
            type="text"
          />
          <ValidatedInput
            {...lastnameInputProps}
            label="Last Name"
            containerStyle="relative w-[680px] flex flex-col gap-3"
            labelStyle="text-subheading2 text-dark-blue"
            value={formik.values.lastname}
            onChange={(e) => formik.setFieldValue("lastname", e.target.value)}
            type="text"
          />
          <ValidatedInput
            {...phoneInputProps}
            label="Phone Number"
            containerStyle="relative w-[680px] flex flex-col gap-3"
            labelStyle="text-subheading2 text-dark-blue"
            value={formik.values.phone}
            onChange={(e) => formik.setFieldValue("phone", e.target.value)}
            type="text"
          />

          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className="text-button bg-bright-green text-white px-6 py-4 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

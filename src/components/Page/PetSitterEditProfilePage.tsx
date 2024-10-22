"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ValidatedInput from "../Input/ValidatedInput";
import { useFormik } from "formik";
import {
  updateProfileValidationSchema,
  UpdateProfileValues,
} from "@/app/constants/formik/updateProfile.formik";
import { useAppSelector } from "@/store/hooks";
import { getFieldProps } from "@/utils/getFieldProps";
import { CloseIcon } from "@/shared/Icon";
import { getAttachmentSrc } from "@/hooks/useImage";

export default function PetSitterEditProfilePage() {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [coverImages, setCoverImages] = useState<string[]>([]);

  const userData = useAppSelector((state) => state.auth.user);

  const onProfileImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      //formik.setFieldValue("file", files[0]);
      setProfileImage(files[0]);
    }
  };

  const onCoverImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      const objectUrl = URL.createObjectURL(files[0]);
      formik.setFieldValue("coverImages", [
        ...(formik.values.coverImages ?? []),
        files[0],
      ]);
      setCoverImages((prev) => [...prev, objectUrl]);
    }
  };

  const onCoverImageRemoved = (deletedIndex: number) => {
    setCoverImages((prev) =>
      prev.filter((coverImage, index) => {
        return index != deletedIndex;
      })
    );
  };

  const handleUpdateProfile = async () => {
    try {
    } catch (error) {}
  };

  const formik = useFormik<UpdateProfileValues>({
    initialValues: {
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      phone: userData?.phone,
      quote: userData?.petsitter?.quote,
      location: userData?.petsitter?.location,
      about: userData?.petsitter?.about,
      experience: userData?.petsitter?.experience,
      coverImages: userData?.petsitter?.coverImages,
    },
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: updateProfileValidationSchema,
    onSubmit: handleUpdateProfile,
  });

  useEffect(() => {
    if (profileImage && profileImage instanceof Blob) {
      const objectUrl = URL.createObjectURL(profileImage);
      //formik.setFieldValue("imageUrl", objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [profileImage]);

  const firstnameInputProps = getFieldProps(formik, "firstname");
  const lastnameInputProps = getFieldProps(formik, "lastname");
  const phoneInputProps = getFieldProps(formik, "phone");
  const quoteInputProps = getFieldProps(formik, "quote");
  const locationInputProps = getFieldProps(formik, "location");
  const aboutInputProps = getFieldProps(formik, "about");
  const experienceInputProps = getFieldProps(formik, "experience");

  return (
    <div className="mx-auto pb-16">
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-8"
      >
        <div>
          <label htmlFor="upload-image" className="flex flex-col items-center">
            <div className="mb-4 w-[150px] h-[150px] rounded-full border-4 border-bright-blue overflow-hidden items-center">
              <Image
                id="profile-image"
                src={userData?.avatar ? getAttachmentSrc(userData.avatar) : "/default_profile.jpg"}
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
        <ValidatedInput
          {...locationInputProps}
          label="Location"
          containerStyle="relative w-[680px] flex flex-col gap-3"
          labelStyle="text-subheading2 text-dark-blue"
          value={formik.values.location}
          onChange={(e) => formik.setFieldValue("location", e.target.value)}
          type="text"
        />
        <ValidatedInput
          {...quoteInputProps}
          label="Quote"
          containerStyle="relative w-[680px] flex flex-col gap-3"
          labelStyle="text-subheading2 text-dark-blue"
          value={formik.values.quote}
          onChange={(e) => formik.setFieldValue("quote", e.target.value)}
          type="text"
        />
        <ValidatedInput
          {...aboutInputProps}
          label="About"
          containerStyle="relative w-[680px] flex flex-col gap-3"
          labelStyle="text-subheading2 text-dark-blue"
          height="h-[150px]"
          value={formik.values.about}
          onTextAreaChange={(e) =>
            formik.setFieldValue("about", e.target.value)
          }
          type="textarea"
        />
        <ValidatedInput
          {...experienceInputProps}
          label="My Experiences"
          containerStyle="relative w-[680px] flex flex-col gap-3"
          labelStyle="text-subheading2 text-dark-blue"
          height="h-[150px]"
          value={formik.values.experience}
          onTextAreaChange={(e) =>
            formik.setFieldValue("experience", e.target.value)
          }
          type="textarea"
        />
        <div className="w-[680px] flex flex-col gap-3">
          <label className="text-subheading2 text-dark-blue">
            Cover Images
          </label>
          <div className="px-6 py-8 flex flex-col gap-4 border-2 border-dashed border-bd-gray rounded-lg">
            <div className="relative flex flex-row justify-center items-center text-white bg-bright-blue rounded-[8px] w-[163px] h-[32px] justify-self-center px-6 text-button cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={onCoverImageUploaded}
                className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer opacity-0"
              />
              Upload Image
            </div>
            {coverImages.length == 0 && (
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={"/empty-cover-image.svg"}
                  width={300}
                  height={300}
                  alt={"empty cover image"}
                />
                <p className="text-center text-soft-gray">
                  Add a cover image to make your profile stand out!
                </p>
              </div>
            )}
            {coverImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-[#F5F5F5] hover:shadow-custom"
                >
                  <Image
                    src={image}
                    width={700}
                    height={700}
                    alt="cover images"
                    className="w-full h-[366px] object-contain"
                  />
                  <button
                    type="button"
                    className={`w-8 h-8 bg-[#0f1419bf] hover:bg-[#272c30bf] rounded-full flex flex-row justify-center items-center absolute top-2 right-2`}
                    onClick={() => onCoverImageRemoved(index)}
                  >
                    <CloseIcon customStyle="w-[18px] h-[18px]" color="white" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="submit"
          className="text-button bg-bright-green text-white px-6 py-4 rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
}

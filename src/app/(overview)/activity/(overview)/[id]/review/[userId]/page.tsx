"use client";


import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

import { useFormik } from "formik";
import { createReviewValidationSchema, CreateReviewValue, emptyCreateReviewValue } from "@/app/constants/formik/create_review.formik";
import ValidatedInput from "@/components/Input/ValidatedInput";
import { getFieldProps } from "@/utils/getFieldProps";
import { useEffect, useState } from "react";
import { userService } from "@/services/user.service";
import { CommonUserModel } from "@/types/user.type";
import { useRouter } from "next/navigation";
import { getAttachmentSrc } from "@/hooks/useImage";
import { reviewService } from "@/services/review.service";
import { Toast } from "@/components/Toast/Toast";

export default function ActivityReviewPage({ params }: {
    params: { id: string, userId: string }
}
){
    const [userData, setUserData] = useState<CommonUserModel | null>(null);
    const router = useRouter();

    const onReviewButtonClicked = async () => {
        if(!userData?.petsitter?.id) {
            return;
        }
        try {
            await reviewService.reviewActivity(
                {...formik.values,
                  petsitterId: userData?.petsitter?.id,
                }
              );
              Toast("The activity has been completed.", "success");
              router.back();
        } catch(error) {
            if(error) {
                Toast(error as string, "error");
            }
            else {
                Toast("Failed to review.", "error");
            }
        }
        
      }

      const formik = useFormik<CreateReviewValue>({
        initialValues: {
            ...emptyCreateReviewValue, 
            activityId: params.id,
        },
        validateOnChange: false,
        enableReinitialize: true,
        validationSchema: createReviewValidationSchema,
        onSubmit: onReviewButtonClicked,
    });

    const contentInputProps = getFieldProps(formik, "content");

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await userService.getUser(params.userId);
                setUserData(response); 
            } catch (error) {
                router.push("/");
            }
        };
        getUser();
    }, [params.id])

    return (
        <form className="w-[680px] mx-auto pb-9 flex flex-col items-center gap-8" onSubmit={formik.handleSubmit} noValidate>
            <div className="w-full flex flex-col items-start gap-8">
                <div className="flex flex-row items-center gap-4">
                    <Image 
                        src={userData?.avatar ? getAttachmentSrc(userData.avatar) : "/default_profile.jpg"}
                        width={120}
                        height={120}
                        alt={"pet sitter profile"}
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-bright-blue object-cover"
                    />
                    <p className="text-subheading text-bright-blue">{userData?.firstname + " " + userData?.lastname}</p>
                </div>
                <div className="w-full flex flex-row justify-center gap-5">
                    <button
                        type="button"
                        onClick={() => formik.setFieldValue("rating",1)}
                    >
                        <StarIcon className="w-[60px] h-[60px] text-golden-yellow"/>
                    </button>
                    <button
                        type="button"
                        onClick={() => formik.setFieldValue("rating",2)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${formik.values.rating >= 2 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                    <button
                        type="button"
                        onClick={() => formik.setFieldValue("rating",3)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${formik.values.rating >= 3 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                    <button
                        type="button"
                        onClick={() => formik.setFieldValue("rating",4)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${formik.values.rating >= 4 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                    <button
                        type="button"
                        onClick={() => formik.setFieldValue("rating",5)}
                    >
                        <StarIcon className={`w-[60px] h-[60px] ${formik.values.rating >= 5 ? "text-golden-yellow" : "text-light-gray2"}`}/>
                    </button>
                </div>
            </div>
            <ValidatedInput
            {...contentInputProps}
            label="Share more about your experience"
            containerStyle="relative w-full flex flex-col gap-3"
            labelStyle="text-body-bold "
            height="h-[136px]"
            value={formik.values.content}
            onTextAreaChange={(e) => formik.setFieldValue("content", e.target.value)}
            type="textarea"/>
           
            <button className="px-6 py-4 flex flex-row justify-between items-center rounded-lg text-button text-white bg-golden-yellow" type="submit">Post review</button>
        </form>
    );
}
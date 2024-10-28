"use client";


import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

import { activityService } from "@/services/activity.service";
import { useFormik } from "formik";
import { createReviewValidationSchema, CreateReviewValue, emptyCreateReviewValue } from "@/app/constants/formik/create_review.formik";
import ValidatedInput from "@/components/Input/ValidatedInput";
import { getFieldProps } from "@/utils/getFieldProps";

export default function ActivityReviewPage({ params }: {
    params: { id: string, petSitterId: string }
}
){
    console.log(params);

    

    const onReviewButtonClicked = async () => {
        const response = await activityService.reviewActivity(
          formik.values
        );
        console.log(response);
      }

      const formik = useFormik<CreateReviewValue>({
        initialValues: {
            ...emptyCreateReviewValue, 
            activityId: params.id,
            petsitterId: params.petSitterId
        },
        validateOnChange: false,
        enableReinitialize: true,
        validationSchema: createReviewValidationSchema,
        onSubmit: onReviewButtonClicked,
    });

    const contentInputProps = getFieldProps(formik, "content");


    //console.log(params.id);

    return (
        <form className="w-[680px] mx-auto flex flex-col items-center gap-8" onSubmit={formik.handleSubmit} noValidate>
            <div className="w-full flex flex-col items-start gap-8">
                <div className="flex flex-row items-center gap-4">
                    <Image 
                        src="/pet-sitter.jpg"
                        width={120}
                        height={120}
                        alt={"pet sitter profile"}
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-bright-blue object-cover"
                    />
                    <p className="text-subheading text-bright-blue">Kirana Jasmine Chewter</p>
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
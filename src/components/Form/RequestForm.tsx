"use client";

import { useState } from "react";
import { requestService } from "@/services/request.service";
import { useFormik } from "formik";
import { createRequestValidationSchema, createRequestvalues, emptyCreateRequestValues } from "@/app/constants/formik/createRequest.formik";
import ValidatedInput from "../Input/ValidatedInput";
import { getFieldProps } from "@/utils/getFieldProps";
import { Toast } from "../Toast/Toast";
import { useRouter } from "next/navigation";

export default function RequestForm({activityId}: {activityId: string}){
    const [applyClicked, setApplyClicked] = useState<boolean>(false);

    const router=useRouter()

    const onApplyButtonClicked = () => {
        setApplyClicked(true);
    }

    const onCancelButtonClicked = () => {
        setApplyClicked(false);
    }

    const onCreateRequestButtonClicked = async () => {
        try {
            const response = await requestService.createRequest(
                formik.values
            )
            console.log(response);
            router.push(`/activity/${activityId}`)
        } catch (error) {
            Toast("Fail to send request", "error");
        }
    }

    const formik = useFormik<createRequestvalues>({
        initialValues: {
            ...emptyCreateRequestValues, 
            activityId: activityId,
        },
        validateOnChange: false,
        enableReinitialize: true,
        validationSchema: createRequestValidationSchema,
        onSubmit: onCreateRequestButtonClicked,
    });

    const priceInputProps=getFieldProps(formik, "price");

    const validateMessage=getFieldProps(formik, "message");

    return (
        <form className="flex flex-col items-end" noValidate onSubmit={formik.handleSubmit}>
            {
                !applyClicked &&
                <button
                    onClick={onApplyButtonClicked} 
                    className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-blue"
                >Apply for activity</button>
            }
            
            {
                applyClicked &&
                <div className="w-[561px] px-4 py-6 flex flex-col gap-[31px] border pop-up-shadow rounded-lg">
                    <h3 className="text-subheading text-bright-blue">Apply for Activity</h3>
                    <div className="flex flex-col gap-[15px]">
                        <ValidatedInput
                            {...priceInputProps}
                            label="Service fee"
                            containerStyle="relative w-[105px] flex flex-col gap-3"
                            labelStyle="text-body-bold"
                            value={formik.values.price}
                            onChange={(e) => formik.setFieldValue("price", Number(e.target.value))}
                            type="number"
                        />
                        <ValidatedInput
                            {...validateMessage}
                            label="Message to pet owner"
                            containerStyle="relative w-full flex flex-col gap-3"
                            height="h-[82px]"
                            labelStyle="text-body-bold"
                            value={formik.values.message}
                            onTextAreaChange={(e) => formik.setFieldValue("message", e.target.value)}
                            type="textarea"
                        />
                        <div className="flex flex-row gap-4">
                            <button className="px-6 py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green" type="submit">Send request</button>
                            <button 
                                onClick={onCancelButtonClicked}
                                className="px-6 py-4 flex flex-row justify-center items-center border-[2px] border-soft-gray rounded-lg text-body-bold button text-soft-gray bg-white"
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            }         
        </form>
        
    );
}
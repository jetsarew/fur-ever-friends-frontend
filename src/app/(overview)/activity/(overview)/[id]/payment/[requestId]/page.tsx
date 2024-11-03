"use client";

import { acceptRequestValidationSchema, AcceptRequestValue, emptyAcceptRequestValue } from "@/app/constants/formik/acceptRequest.formik";
import ValidatedInput from "@/components/Input/ValidatedInput";
import { Toast } from "@/components/Toast/Toast";
import { formatUTCDate } from "@/hooks/useConvertTime";
import { getAttachmentSrc } from "@/hooks/useImage";
import { activityService } from "@/services/activity.service";
import { requestService } from "@/services/request.service";
import { ActivityModelResponse, RequestModelResponse } from "@/types/response.type";
import { getFieldProps } from "@/utils/getFieldProps";
import { useFormik } from "formik";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function PaymentPage({ params }: {
    params: { id: string, requestId: string }
}
){
    const [activity, setActivity] = useState<ActivityModelResponse | null>(null);
    const [request, setRequest] = useState<RequestModelResponse | null>(null);
    const router = useRouter();

    const handleAcceptRequest = async () => {
        try {
            await requestService.acceptRequest(params.requestId);
            router.push(`/activity/assigned`);
            Toast(`The activity has assigned to ${request?.petsitter.user?.firstname + " " + request?.petsitter.user?.lastname}`, "success");
        } catch(error) {
            if(error) {
                Toast(error as string, "error");
            }
            else {
                Toast("Failed to accept request.", "error");
            }  
        }
    }

    const formik = useFormik<AcceptRequestValue>({
        initialValues: {
            ...emptyAcceptRequestValue,
        },
        validateOnChange: false,
        enableReinitialize: true,
        validationSchema: acceptRequestValidationSchema,
        onSubmit: handleAcceptRequest,
    });

    useEffect(() => {
        const fetchActivity = async () => {
            const response = await activityService.getActivityById(params.id);
            setActivity(response);
            setRequest(response.requests.filter((request) => request.id == params.requestId)[0])
        }

        fetchActivity();
    }, [params.id]);

    if(!activity) return null;

    const nameInputProps = getFieldProps(formik, "name");
    const cardNumberInputProps = getFieldProps(formik, "cardNumber");
    const expirationInputProps = getFieldProps(formik, "expiration");
    const cvcInputProps = getFieldProps(formik, "cvc");

    return (
        <div className="-mt-9 pb-9 flex flex-col min-h-screen items-center justify-center">
            <form noValidate onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-12 w-[680px]">
            <div className="flex flex-col items-start gap-12 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch p-6 px-4 rounded-lg border border-bd-gray">
                <div className='flex justify-between items-end self-stretch'>
                    <div className='flex items-end' style={{ gap: 'var(--Space-200, 8px)' }}>
                    <Image src={request?.petsitter.user.avatar ? getAttachmentSrc(request.petsitter.user.avatar) : "/default_profile.jpg"} width={80} height={80} alt="Pet Sitter" className="w-10 h-10 rounded-[40px] border-[3px] border-bright-blue object-cover object-center"/>
                    <p className='text-dark-blue text-subheading'>{request?.petsitter.user?.firstname + " " + request?.petsitter.user?.lastname}</p>
                    </div>
                    <p className='text-bright-green text-subheading'>{`$${request?.price}`}</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className='text-bright-blue text-subheading2'>{activity?.title}</p>
                    <div className="flex items-center gap-1">
                    {
                        activity?.services.map((service, index) => {
                            return (
                                <Image 
                                    key={index}
                                    src={getAttachmentSrc(service.pet.imageUrl)}
                                    width={64}
                                    height={64}
                                    alt="pet picture"
                                    className="w-8 h-8 rounded-[40px] border-[2px] border-bright-blue object-cover object-center"
                                />
                            )
                        })
                    }
                    </div>
                </div>
                <div className="flex flex-col items-start self-strFetch">
                    <div className="flex items-end gap-8 pb-4 self-stretch border-b border-gray-200">
                    <div className="flex flex-col items-start gap-2 w-[308px]">
                        <p className="text-dark text-body-bold">Start</p>
                        <p className="text-dark text-body">{formatUTCDate(activity.startDateTime)}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 w-[308px]">
                        <p className="text-dark text-body-bold">End</p>
                        <p className="text-dark text-body">{formatUTCDate(activity.endDateTime)}</p>
                    </div>
                    </div>
                    <div className="flex items-end gap-8 pt-4 self-stretch">
                    <div className="flex items-end gap-2 w-[308px]">
                        <Image src="/location.svg" width={48} height={48} alt="Meme Dog" className='w-6 h-6 rounded-full' />
                        <p className="text-dark text-body">{activity.pickupPoint}</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="flex flex-col items-start gap-8 self-stretch">
                <div className="flex flex-col items-start gap-8 self-stretch">
                    <h2 className="text-dark-blue text-subheading2">Payment Detail</h2>
                    <div className="flex flex-col items-start gap-4 self-stretch">
                    <ValidatedInput 
                        {...nameInputProps}
                        label="Name on Card"
                        containerStyle="relative flex flex-col items-start gap-3 self-stretch"
                        labelStyle="text-body-bold"
                        value={formik.values.name}
                        onChange={(e) => formik.setFieldValue("name", e.target.value)}
                        type="text"
                    />
                    <ValidatedInput 
                        {...cardNumberInputProps}
                        label="Card Number"
                        containerStyle="relative flex flex-col items-start gap-3 self-stretch"
                        labelStyle="text-body-bold"
                        value={formik.values.cardNumber}
                        onChange={(e) => formik.setFieldValue("cardNumber", e.target.value)}
                        type="text"
                    />
                    <div className="flex items-start gap-8 self-stretch">
                        <ValidatedInput 
                            {...expirationInputProps}
                            label="Expiration"
                            containerStyle="relative flex flex-col items-start gap-3 flex-1"
                            labelStyle="text-body-bold"
                            value={formik.values.expiration}
                            onChange={(e) => formik.setFieldValue("expiration", e.target.value)}
                            type="text"
                        />
                        <ValidatedInput 
                            {...cvcInputProps}
                            label="CVC"
                            containerStyle="relative flex flex-col items-start gap-3 flex-[1_0_0]"
                            labelStyle="text-body-bold"
                            value={formik.values.cvc}
                            onChange={(e) => formik.setFieldValue("cvc", e.target.value)}
                            type="text"
                        />
                    </div>
                    </div>
                </div>   
                </div>
            </div>
                <button
                type="submit"
                className="flex justify-center items-center gap-3 py-4 px-6 rounded-lg bg-bright-blue text-body text-white text-button"
                >
                Confirm
                </button>
            </form>
        </div>
    )
}
'use client';

import { qualificationService } from "@/services/qualification.service";
import { QualificationModelResponse } from "@/types/user.type";
import { userService } from "@/services/user.service";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getAttachmentSrc } from "@/hooks/useImage";

export default function ApplicationPage({ params }: {
    params: { id: string }
}) {
    const [qualification, setQualification] = useState<QualificationModelResponse>();
    const [previewCertificateImage, setPreviewCertificateImage] = useState<string>("/Upload file.svg");

    useEffect(() => {
        const fetchQualification = async () => {
            try {
                const response = await qualificationService.getQualification(params.id);
                setQualification(response);
                setPreviewCertificateImage(response.certificateUrl);
            } catch (error) {
                console.error(error);
            }
        };
        fetchQualification();
    }, []);

    useEffect(() => {
        if (qualification) {
            setPreviewCertificateImage(qualification.certificateUrl);
        }
    }, []);

    const onAcceptQualificationClick = async () => {
        if (qualification) {
            await userService.createPetSitter(qualification.email);
            window.location.reload();
        }
    };

    const onRejectQualificationClick = async () => {
        if (qualification) {
            await qualificationService.updateQualification(qualification.id, { state: "REJECTED" })
            window.location.reload();
        }
    };

    console.log(previewCertificateImage);

    return (
        <div className="absolute flex flex-col gap-[32px] top-[172px] left-[261px] w-[918px] rounded-[8px] border boredr-bd-gray py-[24px] px-[16px]">
            <div className="flex justify-between">
                <div className="text-subheading text-dark-blue">
                    Application
                </div>
                <div className="flex gap-[16px]">
                    {qualification?.state === "PENDING" ?
                        <>
                            <button
                                className="bg-bright-green text-button text-white py-[8px] px-[24px] rounded-[8px]"
                                onClick={onAcceptQualificationClick}>
                                Accept
                            </button>
                            <button
                                className="text-button text-bright-red border border-bright-red py-[8px] px-[24px] rounded-[8px]"
                                onClick={onRejectQualificationClick}>
                                Reject
                            </button>
                        </> :
                        <div className="text-body-bold text-medium-gray">
                            {qualification?.state == "ACCEPTED" ? "Accepted" : "Rejected"}
                        </div>
                    }
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="grid gap-[8px]">
                    <div className="text-body-bold text-dark">
                        Name
                    </div>
                    <div className="text-body text-dark">
                        {qualification?.firstname} {qualification?.lastname}
                    </div>
                </div>
                <div className="grid gap-[8px]">
                    <div className="text-body-bold text-dark">
                        Email
                    </div>
                    <div className="text-body text-dark">
                        {qualification?.email}
                    </div>
                </div>
                <div className="grid gap-[8px]">
                    <div className="text-body-bold text-dark">
                        Phone number
                    </div>
                    <div className="text-body text-dark">
                        {qualification?.phone}
                    </div>
                </div>
            </div>
            <div className="grid gap-[8px]">
                <div className="text-body-bold text-dark">
                    Certificate
                </div>
                <div className="border border-bd-gray rounded-[8px] p-[8px]">
                    <Image
                        src={qualification?.certificateUrl ? getAttachmentSrc(qualification.certificateUrl) : "/empty.svg"}
                        width={194}
                        height={121}
                        alt="Upload file"
                        className={`${previewCertificateImage != "/Upload file.svg"
                            ? "w-[208px] h-[161px] object-cover"
                            : ""
                            }`}
                    />
                </div>
            </div>
        </div>
    )
}
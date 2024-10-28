"use client";

import ConfirmPetReceiptModal from "@/components/Modal/ConfirmPetReceiptModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function ConfirmPetReceiptPage({ params }: {
    params: { id: string }
}){
    useEffect(() => {
        handleOpenModal("confirm-pet-receipt");
    }, []);
    return <ConfirmPetReceiptModal activityId={params.id} />
}
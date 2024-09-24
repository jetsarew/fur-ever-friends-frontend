"use client";

import ConfirmPetReceiptModal from "@/components/Modal/ConfirmPetReceiptModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function ConfirmPetReceiptPage(){
    useEffect(() => {
        handleOpenModal("confirm-pet-receipt");
    }, []);
    return <ConfirmPetReceiptModal />
}
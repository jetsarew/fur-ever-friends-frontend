"use client";

import ConfirmPetReturnModal from "@/components/Modal/ConfirmPetReturnModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function ConfirmPetReturnPage(){
    useEffect(() => {
        handleOpenModal("confirm-pet-return");
    }, []);
    return <ConfirmPetReturnModal />
}
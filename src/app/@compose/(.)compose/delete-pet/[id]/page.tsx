"use client";

import DeletePetModal from "@/components/Modal/DeletePetModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function DeletePetPage(){
    useEffect(() => {
        handleOpenModal("delete-pet");
    }, []);
    return <DeletePetModal />
}
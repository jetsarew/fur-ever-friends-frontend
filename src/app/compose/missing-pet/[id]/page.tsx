"use client";

import MissingPetModal from "@/components/Modal/MissingPetModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function MissingPetPage({ params }: {
    params: { id: string }
}){
    useEffect(() => {
        handleOpenModal("missing-pet");
    }, []);
    return <MissingPetModal activityId={params.id}/>
}
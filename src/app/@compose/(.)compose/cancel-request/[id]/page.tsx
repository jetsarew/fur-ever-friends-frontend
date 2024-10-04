"use client";

import CancelRequestModal from "@/components/Modal/CancelRequestModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function CancelRequestPage(){
    useEffect(() => {
        handleOpenModal("cancel-request");
    }, []);
    return <CancelRequestModal />
}
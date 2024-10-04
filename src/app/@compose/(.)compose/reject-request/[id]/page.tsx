"use client";

import RejectRequestModal from "@/components/Modal/RejectRequestModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function RejectRequestPage(){
    useEffect(() => {
        handleOpenModal("reject-request");
    }, []);
    return <RejectRequestModal />
}
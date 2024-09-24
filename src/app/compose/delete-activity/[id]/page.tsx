"use client";

import DeleteActivityModal from "@/components/Modal/DeleteActivityModal";
import { handleOpenModal } from "@/lib/Modal";
import { useEffect } from "react";

export default function DeleteActivityPage(){
    useEffect(() => {
        handleOpenModal("delete-activity");
    }, []);
    return <DeleteActivityModal />
}
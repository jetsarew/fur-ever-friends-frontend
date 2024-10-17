"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { usePets } from "@/hooks/usePets";
import { Toast } from "../Toast/Toast";
interface DeletePetModalInterface {
    petId: string;
}
export default function DeletePetModal({ petId }: DeletePetModalInterface){
    const router = useRouter()
    const { deletePet } = usePets();

    const onDeleteButtonClicked = async () => {
        try {
            await deletePet(petId);
            Toast("Delete pet successfully", "success");
            router.back();
        } catch (error) {

        }
    }

    return ( 
        <Modal
            modalId="delete-pet" 
        >
            <div
                className="w-[300px] mx-auto p-8 flex flex-col gap-2 border-bd-gray rounded-xl bg-white"
            >
                <h1 className="text-subheading2">Delete pet?</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-small-paragraph text-soft-gray">This action cannot be undone, and the pet will be permanently removed from your account.</p>
                    <div className="flex flex-col gap-2">
                        <button 
                            type="button"
                            onClick={onDeleteButtonClicked}
                            className="w-full py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-red"
                        >Delete</button>
                        <button 
                            type="button"
                            onClick={() => {router.back();}}
                            className="w-full py-4 flex flex-row justify-center items-center border border-soft-gray rounded-lg text-body-bold text-soft-gray"
                        >Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
      );
}
"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";
interface MissingPetModalInterface {
    activityId: string;
}
export default function MissingPetModal({ activityId }: MissingPetModalInterface){
    const router = useRouter()

    const onConfirmButtonClicked = async () => {
        try {
            //await deletePet(petId);
            //Toast("Delete pet successfully", "success");
            console.log(activityId);
            router.back();
        } catch (error) {

        }
    }

    return ( 
        <Modal
            modalId="missing-pet" 
        >
            <div
                className="w-[300px] mx-auto p-8 flex flex-col gap-2 border-bd-gray rounded-xl bg-white"
            >
                <h1 className="text-subheading2">Mark pet as missing?</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-small-paragraph text-soft-gray">Marking the pet as missing will notify the necessary contacts and record the status on your account.</p>
                    <div className="flex flex-col gap-2">
                        <button 
                            type="button"
                            onClick={onConfirmButtonClicked}
                            className="w-full py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-red"
                        >Confirm</button>
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
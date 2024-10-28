"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { activityService } from "@/services/activity.service";
import { Toast } from "../Toast/Toast";

interface ConfirmPetReturnModalInterface {
    activityId: string;
}

export default function ConfirmPetReturnModal({ activityId }: ConfirmPetReturnModalInterface){
    const router = useRouter()

    const onConfirmButtonClicked = async () => {
        try {
            await activityService.updateActivityState(activityId, {
                state: "RETURNING"
            })
            Toast("Success", "success");
            router.back();
        } catch (error) {

        }
    }

    return ( 
        <Modal
            modalId="confirm-pet-return" 
        >
            <div
                className="w-[300px] mx-auto p-8 flex flex-col gap-2 border-bd-gray rounded-xl bg-white"
            >
                <h1 className="text-subheading2">Confirm pet return?</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-small-paragraph text-soft-gray">Please ensure that all pets have been returned. This will update their status accordingly.</p>
                    <div className="flex flex-col gap-2">
                        <button 
                            type="button"
                            onClick={onConfirmButtonClicked}
                            className="w-full py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green"
                        >Yes, confirm</button>
                        <button 
                            type="button"
                            onClick={() => {router.back();}}
                            className="w-full py-4 flex flex-row justify-center items-center border border-soft-gray rounded-lg text-body-bold text-soft-gray"
                        >No, cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
      );
}
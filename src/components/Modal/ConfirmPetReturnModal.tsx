"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function ConfirmPetReturnModal(){
    const router = useRouter()

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
                        <button className="w-full py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-green">Yes, confirm</button>
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
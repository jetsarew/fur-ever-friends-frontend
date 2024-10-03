"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function CancelRequestModal(){
    const router = useRouter()

    return ( 
        <Modal
            modalId="cancel-request" 
        >
            <div
                className="w-[300px] mx-auto p-8 flex flex-col gap-2 border-bd-gray rounded-xl bg-white"
            >
                <h1 className="text-subheading2">Cancel request?</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-small-paragraph text-soft-gray">This action can’t be undone, and you will no longer be considered for this activity.</p>
                    <div className="flex flex-col gap-2">
                        <button className="w-full py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-red">Yes, cancel</button>
                        <button 
                            type="button"
                            onClick={() => {router.back();}}
                            className="w-full py-4 flex flex-row justify-center items-center border border-soft-gray rounded-lg text-body-bold text-soft-gray"
                        >No, go back</button>
                    </div>
                </div>
            </div>
        </Modal>
      );
}
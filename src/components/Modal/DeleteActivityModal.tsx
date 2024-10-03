"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { handleCloseModal } from "@/lib/Modal";

export default function DeleteActivityModal(){
    const router = useRouter();

    return ( 
        <Modal
            modalId="delete-activity" 
        >
            <div
                className="w-[300px] mx-auto p-8 flex flex-col gap-2 border-bd-gray rounded-xl bg-white"
            >
                <h1 className="text-subheading2">Delete activity?</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-small-paragraph text-soft-gray">This can’t be undone and it will be removed from your account, the timeline of any pet sitter accounts, and from search results.</p>
                    <div className="flex flex-col gap-2">
                        <button className="w-full py-4 flex flex-row justify-center items-center rounded-lg text-button text-white bg-bright-red">Delete</button>
                        <button 
                            type="button"
                            onClick={() => {
                                    handleCloseModal("delete-activity");
                                    router.back();
                                }
                            }
                            className="w-full py-4 flex flex-row justify-center items-center border border-soft-gray rounded-lg text-body-bold text-soft-gray"
                        >Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
      );
}
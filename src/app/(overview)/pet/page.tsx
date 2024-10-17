"use client";

import Link from "next/link";
import PetCard from "@/components/Card/PetCard";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { usePets } from "@/hooks/usePets";

export default function PetPage() {
    const userData = useAppSelector((state) => state.auth.user);
    const { petList } = usePets();
    const router = useRouter();
    const isAllowed = userData && userData.customer && userData?.role == "CUSTOMER";

    if (!isAllowed) {
        router.push("/");
    }

    const pets = petList.filter((pet) => {
        return  pet.ownerId == userData?.customer?.id;
    })

    console.log(pets);
    
    return (
        <div>
            <div className="min-h-screen bg-white flex justify-center">
                <div className="w-[918px]">
                    <div className="-mr-8 flex justify-end mb-6 sticky top-[96px] z-[4]">
                        <Link href="/pet/create" className="bg-bright-green text-white px-6 py-4 rounded-md text-button shadow-custom">
                            + Add a pet
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-between gap-8 gap-y-8 pb-24">
                        {
                            pets?.map((pet, index) => {
                                return <PetCard key={index} width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} pet={pet} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

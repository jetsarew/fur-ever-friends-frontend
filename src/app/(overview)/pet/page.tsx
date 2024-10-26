"use client";

import Link from "next/link";
import PetCard from "@/components/Card/PetCard";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { usePets } from "@/hooks/usePets";
import Image from "next/image";

export default function PetPage() {
    const userData = useAppSelector((state) => state.auth.user);
    const { petList } = usePets();
    const router = useRouter();
    const isAllowed = userData && userData.customer && userData?.role == "CUSTOMER";

    if (!isAllowed) {
        router.push("/");
    }
    
    return (
        <div>
            <div className="h-fit bg-white flex justify-center">
                <div className="w-[918px]">
                    <div className="-mr-8 flex justify-end mb-6 sticky top-[96px] z-[4]">
                        <Link href="/pet/create" className="bg-bright-green text-white px-6 py-4 rounded-md text-button shadow-custom">
                            + Add a pet
                        </Link>
                    </div>
                    {
                        petList?.length == 0 &&
                        <div className="pt-[90px] flex flex-col items-center gap-4">
                            <Image
                                src={"/empty.svg"}
                                width={300}
                                height={300}
                                alt={"empty cover image"}
                            />
                            <p className="text-center text-soft-gray">
                                It looks a little quiet here... Start by adding your furry friend!
                            </p>
                        </div>
                    }
                    <div className={`flex flex-wrap justify-cen gap-8 gap-y-8 ${petList.length && "pb-24"}`}>
                        {
                            petList?.map((pet, index) => {
                                return <PetCard key={index} width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} pet={pet} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

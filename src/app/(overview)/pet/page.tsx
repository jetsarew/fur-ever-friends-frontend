import Link from "next/link";
import PetCard from "@/components/Card/PetCard";

export default function PetPage() {
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
                        <PetCard width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} />
                        <PetCard width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} />
                        <PetCard width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} />
                        <PetCard width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} />
                        <PetCard width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} />
                        <PetCard width={"w-[443px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}

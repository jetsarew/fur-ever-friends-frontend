import Link from "next/link";
import PetCard from "@/components/Card/PetCard";

export default function PetPage() {
    return (
        <div>
            <div className="min-h-screen bg-white flex justify-center">
                <div className="w-[60%]">
                    <div className="flex space-x-4 justify-end mb-6 mt-8">
                        <Link href="/pet/create" passHref>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium">
                                + Add a pet
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-between gap-6 pb-24">
                        {/* Adjusted to have two cards per row */}
                        <div className="flex flex-wrap justify-between w-full gap-6">
                            <PetCard width={"w-[48%]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} />
                            <PetCard width={"w-[48%]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} />
                        </div>
                        <div className="flex flex-wrap justify-between w-full gap-6">
                            <PetCard width={"w-[48%]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} />
                            <PetCard width={"w-[48%]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

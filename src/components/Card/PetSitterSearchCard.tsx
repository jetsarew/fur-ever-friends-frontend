import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default function PetSitterSearchCard(){
    return (
        <Link
            href={"/profile/1234"}
            className="w-[205px] flex flex-col border border-bd-gray rounded-lg overflow-hidden hover:shadow-custom"
        >
            <Image 
                src="/pet-sitter.jpg"
                width={410}
                height={344}
                alt="sitter profile image"
                className="w-[205px] h-[172px] object-cover"
            />
            <div className="px-4 py-2 flex flex-col gap-3">
                <p className="text-body">Kirana Jasmine Chewter</p>
                <div className="flex flex-row justify-between items-baseline">
                    <div className="flex flex-row items-baseline gap-1">
                        <p className="text-body-bold text-bright-blue">200</p>
                        <p className="text-[14px] font-normal leading-[100%] text-soft-gray">done</p>
                    </div>
                    <div className="flex flex-row text-golden-yellow items-end">
                        <StarIcon className="w-5 h-5"/>
                        <p className="text-body-bold">4.5</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
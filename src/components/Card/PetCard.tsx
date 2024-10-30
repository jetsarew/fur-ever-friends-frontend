import Image from "next/image";
import PetCardTextSection from "./PetCardTextSection";
import PetActionButton from "../Button/PetActionButton";
import { PetModelResponse } from "@/types/response.type";
import { getAttachmentSrc } from "@/hooks/useImage";

interface PetCardInterface {
    width?: string;
    padding?: string;
    border?: string;
    showActionButton?: boolean;
    pet: PetModelResponse;
}

export default function PetCard({ width, padding, border, showActionButton, pet }: PetCardInterface) {
    return (
        <div className={`relative ${width == undefined ? "" : width} ${padding == undefined ? "px-3 py-3" : padding} flex flex-row items-start ${border == undefined ? "" : border}`}>
            <div className="py-3 pr-1 flex flex-col items-center gap-3">
                <Image
                    src={getAttachmentSrc(pet.imageUrl)}
                    width={186}
                    height={186}
                    alt={"pet profile picture"}
                    className="w-[93px] h-[93px] border-[3px] border-bright-blue rounded-full object-cover"
                />
                <div className="flex flex-col items-center gap-7">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <p className="text-subheading2">{pet.name}</p>
                        <p className="text-small text-standard-gray">{pet.breed.name}</p>
                    </div>
                    <div className="flex flex-row">
                        <div className={`w-[26px] h-[26px] flex flex-row justify-center items-center rounded-lg ${pet.gender == "MALE" ? "bg-bright-blue" : "bg-[#F576AC]"}`}>
                            <Image
                                src={pet.gender == "MALE" ? "/male.png" : "/female.png"}
                                width={18}
                                height={18}
                                alt={pet.gender == "MALE" ? "male" : "female"}
                            />
                        </div>
                        <div className="pl-4 flex flex-row justify-end items-baseline gap-[2px]">
                            <span className="text-[20px]">{pet.weight}</span>
                            <span className="text-[12px]">Kg</span>
                        </div>
                        <div className="pl-4 flex flex-row justify-end items-baseline gap-[2px]">
                            <span className="text-[20px]">{pet.age}</span>
                            <span className="text-[12px]">{"year" + (pet.age > 1 ? "s" : "")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <PetCardTextSection
                    title="Personality"
                    description={pet.personality}
                    padding={"pt-3 pl-3"}
                    border={"border-b border-bd-gray"}
                />
                <PetCardTextSection
                    title="Allergies"
                    description={pet.allergy}
                    padding={"pt-3 pl-3"}
                    border={"border-b border-bd-gray"}
                />
                <PetCardTextSection
                    title="Other detail"
                    description={pet.otherDetail}
                    padding={"pt-3 pl-3"}
                />
            </div>
            {
                showActionButton && <PetActionButton petId={pet.id} />
            }
        </div>
    )
}
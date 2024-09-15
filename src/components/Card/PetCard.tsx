import Image from "next/image";
import PetCardTextSection from "./PetCardTextSection";

export default function PetCard({ width, padding, border }: {
    width?: string;
    padding?: string;
    border?: string;
}){
    return (
        <div className={`${width == undefined ? "" : width} ${padding == undefined ? "px-3 py-3" : padding} flex flex-row items-start ${border == undefined ? "" : border}`}>
            <div className="py-3 pr-1 flex flex-col items-center gap-3">
                <Image 
                    src="/Whiskers.jpg"
                    width={186}
                    height={186}
                    alt={"pet profile picture"}
                    className="w-[93px] h-[93px] border-[3px] border-bright-blue rounded-full object-cover"
                />
                <div className="flex flex-col items-center gap-7">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <p className="text-subheading2">Whiskers</p>
                        <p className="text-small text-standard-gray">Domestic Shorthair</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[26px] h-[26px] flex flex-row justify-center items-center rounded-lg bg-[#F576AC]">
                            <Image 
                                src="/female.png"
                                width={18}
                                height={18}
                                alt={"female"}
                            />
                        </div>
                        <div className="pl-4 flex flex-row justify-end items-baseline">
                            <span className="text-[20px]">5</span>
                            <span className="text-[12px]">Kg</span>
                        </div>
                        <div className="pl-4 flex flex-row justify-end items-baseline">
                            <span className="text-[20px]">2</span>
                            <span className="text-[12px]">years</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <PetCardTextSection
                    title="Personality"
                    description="Affectionate, loves its owner, playful, and curious. Enjoys jumping to high places."
                    padding={"pt-3 pl-3"}
                    border={"border-b border-bd-gray"}
                />
                <PetCardTextSection
                    title="Allergies"
                    description="Corn, dairy products, tuna."
                    padding={"pt-3 pl-3"}
                    border={"border-b border-bd-gray"}
                />
                <PetCardTextSection
                    title="Other detail"
                    description="Whiskers has a mild form of asthma and requires an inhaler during flare-ups."
                    padding={"pt-3 pl-3"}
                />
            </div>
        </div>
    )
}
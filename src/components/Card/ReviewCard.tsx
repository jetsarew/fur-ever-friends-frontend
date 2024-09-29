import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function ReviewCard() {
    return (
        <div className="py-8 flex flex-row items-start gap-6 border-b border-bd-gray">
            <Image
                src="/profile.jpg"
                width={120}
                height={120}
                alt="profile image"
                className="w-[60px] h-[60px] border-[3px] border-bright-blue rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-body-bold text-dark-blue">Pui Sankosik</p>
                        <div className="flex flex-row gap-1">
                            <StarIcon className="w-6 h-6 text-golden-yellow" />
                            <StarIcon className="w-6 h-6 text-golden-yellow" />
                            <StarIcon className="w-6 h-6 text-golden-yellow" />
                            <StarIcon className="w-6 h-6 text-golden-yellow" />
                            <StarIcon className="w-6 h-6 text-golden-yellow" />
                        </div>
                    </div>
                    <p className="text-body-paragraph">Fantastic Experience! She took great care of Whiskers and went above and beyond. Reliable, loving, and attentive, she kept me updated with regular updates and made sure Whiskers was happy and well cared for. Highly recommend!</p>
                </div>
                <p className="text-small text-standard-gray">31 Dec 2024</p>
            </div>
        </div>
    )
}
import { BillIcon, PhoneIcon, WarningIcon } from "@/shared/Icon";
import Image from "next/image";

export default function PetSitterCard() {
  return (
    <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-subheading text-dark-blue">Pet Sitter</h3>
        <button>
          <WarningIcon />
        </button>
      </div>
      <div>
        <div className="pb-3 flex flex-row gap-4 border-b border-bd-gray">
          <Image
            src="/pet-sitter.jpg"
            width={150}
            height={150}
            alt={"pet sitter profile picture"}
            className="w-[75px] h-[75px] border-[3px] border-bright-blue rounded-full object-cover"
          />
          <div className="py-2 flex flex-col justify-between items-start">
            <p className="text-subheading">Kirana Jasmine Chewter</p>
            <div className="flex flex-row">
              <PhoneIcon />
              <p className="text-body-bold">{`(555) 123-4567`}</p>
            </div>
          </div>
        </div>
        <div className="pt-3 flex flex-row justify-between items-baseline">
          <div className="flex flex-row items-baseline gap-2">
            <BillIcon />
            <p className="text-body-bold">Service fee</p>
          </div>
          <p className="text-subheading text-bright-green">$99</p>
        </div>
      </div>
    </div>
  );
}

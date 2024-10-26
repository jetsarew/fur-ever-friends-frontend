"sue client";

import { useRef, useState } from "react";
import AddPetEntry from "./AddPetEntry";
import { PetModelResponse } from "@/types/response.type";
import useOutSideClick from "@/hooks/useOutsideClick";
import { CreateServiceDto } from "@/dto/activity.dto";

interface AddPetButtonInterface {
    pets: PetModelResponse[];
    services: CreateServiceDto[];
    onAddNewPet: (petId: string) => void;
}

export default function AddPetButton({ pets, services, onAddNewPet }: AddPetButtonInterface){
    const [visible, setVisible] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popUpRef = useRef<HTMLDivElement>(null);

    useOutSideClick(buttonRef, popUpRef, setVisible);

    return (
        <div className="relative">
            <div
                ref={buttonRef}
                onClick={() => setVisible(!visible)}
                className="bg-bright-green round-[8px] py-2 px-6 rounded-[8px] text-white text-button hover:cursor-pointer"
            >
                + Add another pet
            </div>
            {
                visible &&
                <div ref={popUpRef} className="absolute top-[100%] right-0 w-[320px] flex flex-col border border-bd-gray rounded-lg bg-white shadow-custom">
                    {
                        pets.map((pet, index) => {
                            return <AddPetEntry key={index} pet={pet} onAddNewPet={onAddNewPet} isAdded={services.some((service) => service.petId === pet.id)}/>
                        })
                    }
                </div>
            }
            
        </div>
    );
}
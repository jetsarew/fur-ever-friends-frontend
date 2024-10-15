"sue client";

import { useState } from "react";
import AddPetEntry from "./AddPetEntry";

interface AddPetButtonInterface {
    onAddNewPet: () => void
}

export default function AddPetButton({ onAddNewPet }: AddPetButtonInterface){
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="relative">
            <div
                onClick={() => setVisible(!visible)}
                className="bg-bright-green round-[8px] py-2 px-6 rounded-[8px] text-white text-button hover:cursor-pointer"
            >
                + Add another pet
            </div>
            {
                visible &&
                <div className="absolute top-[100%] right-0 w-[320px] flex flex-col border border-bd-gray rounded-lg bg-white shadow-custom">
                    <AddPetEntry onAddNewPet={onAddNewPet}/>
                    <AddPetEntry onAddNewPet={onAddNewPet}/>
                    <AddPetEntry onAddNewPet={onAddNewPet}/>
                    <AddPetEntry onAddNewPet={onAddNewPet}/>
                </div>
            }
            
        </div>
    );
}
//import ActivityProgressBar from "./ActivityProgressBar";
import ActivitySection from "./ActivitySection";
import PetCard from "./PetCard";

export default function PetActivityCard(){
    return (
        <div className="flex flex-col items-center">
            <div className="w-[544px] px-4 pt-3 flex flex-col items-center border border-bd-gray rounded-lg">
                <PetCard 
                    width={"w-full"}
                    padding={"pt-3"}
                    border={"border-b border-bd-gray"}
                />
                <div>
                    <ActivitySection 
                        title={"Bathing"}
                        description={"Use Whisker’s shampoo and conditioner. Water should be lukewarm. Wet her coat, avoiding ears and face."}
                        border={"border-b border-bd-gray"}
                    />
                    <ActivitySection 
                        title={"Nail Trimming"}
                        description={'Use the cat nail clippers labeled "Whiskers" and have the styptic powder nearby in case of any minor bleeding.'}
                        border={"border-b border-bd-gray"}
                    />
                    <ActivitySection 
                        title={"Sleeping"}
                        description={"Dim the lights and keep the noise level low. She prefers a quiet environment for sleeping."}
                    />
                </div>
            </div>
            {/* <ActivityProgressBar 
                numberOfTaskDone={2}
                numberOfAllTask={3}
            /> */}
        </div>
    )
}
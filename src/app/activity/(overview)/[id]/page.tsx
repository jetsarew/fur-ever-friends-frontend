import ActivityStateBar from "@/components/Card/ActivityStateBar"
import PetActivityCard from "@/components/Card/PetActivityCard"
//import PetCard from "@/components/Card/PetCard"
//import PetSitterCard from "@/components/Card/PetSitterCard"
import { CalendarIcon, CalendarWithCheckIcon, LocationIcon } from "@/shared/Icon"

export default function ActivityDetailPage({ params }: {
    params: { id: string }
}
){
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-header text-bright-blue">Whiskers & Buddy Outing {params.id}</h1>
            <div className="flex flex-row justify-between items-start">
                <div className="w-[561px] flex flex-col gap-8">
                    {/* <PetSitterCard /> */}
                    <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                        <h3 className="text-subheading text-dark-blue">Duration</h3>
                        <div>
                            <div className="pb-2 flex flex-row items-start gap-2 border-b border-bd-gray">
                                <CalendarIcon/>
                                <div className="pt-2 flex flex-col gap-2">
                                    <p className="text-body-bold">Start</p>
                                    <p className="text-small text-soft-gray">December 31, 2024 at 7:00 am </p>
                                </div>
                            </div>
                            <div className="pt-2 flex flex-row items-start gap-2">
                                <CalendarWithCheckIcon />
                                <div className="pt-2 flex flex-col gap-2">
                                    <p className="text-body-bold">End</p>
                                    <p className="text-small text-soft-gray">December 31, 2024 at 6:00 pm  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                        <h3 className="text-subheading text-dark-blue">Location</h3>
                        <div>
                            <div className="flex flex-row items-start gap-2">
                                <LocationIcon />
                                <div className="pt-2 flex flex-col gap-2">
                                    <p className="text-body-bold">KMITL ECC Building</p>
                                    <p className="text-small-paragraph text-soft-gray">I will be waiting near the reception desk inside the main lobby.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ActivityStateBar />
            </div>
            <div className="py-6 px-4 flex flex-col gap-4 border border-bd-gray rounded-lg">
                <h3 className="text-subheading text-dark-blue">Pet Activities</h3>
                <div className="flex flex-row justify-between items-center flex-wrap gap-8">
                    <PetActivityCard />
                    <PetActivityCard />
                </div>
            </div>
        </div>
    )
}
import { AdminPetOwnerCard, AdminPetSitterCard } from "@/components/Admin/Card/AccountUserCard"
import { CommonUserModel } from "@/types/user.type";
import ReviewCard from "@/components/Card/ReviewCard";
import { usePets } from "@/hooks/usePets";
import PetCard from "@/components/Card/PetCard";

export function PetOwnerPage({ user }: {
    user: CommonUserModel
}) {
    const { petList } = usePets();

    return (
        <>
            <AdminPetOwnerCard user={user} />
            <div className="border border-bd-gray py-[24px] px-[16px] rounded-[8px] h-fit grid gap-[16px]">
                <div className="text-subheading text-dark-blue">
                    Pets
                </div>
                <div className={`flex flex-wrap justify-between gap-[32px]`}>
                    {
                        petList?.map((pet, index) => {
                            return <PetCard key={index} width={"w-[427px]"} border={"border border-bd-gray rounded-lg"} padding={"px-6 py-3"} showActionButton={false} pet={pet} />
                        })
                    }
                </div>
            </div>
        </>
    );
}

export function PetSitterPage({ user }: {
    user: CommonUserModel
}) {
    return (
        <>
            <AdminPetSitterCard user={user} />
            <div className="border border-bd-gray py-[24px] px-[16px] rounded-[8px] h-fit grid gap-[16px]">
                <div className="text-subheading text-dark-blue">
                    Profile Information
                </div>
                <div>
                    <div className="grid gap-[8px] border-b border-bd-gray pb-[16px]">
                        <div className="text-body-bold text-black">
                            Quote
                        </div>
                        <div className="text-body-paragraph text-dark">
                            {user.petsitter?.quote}
                        </div>
                    </div>

                    <div className="grid gap-[8px] border-b border-bd-gray py-[16px]">
                        <div className="text-body-bold text-black">
                            About
                        </div>
                        <div className="text-body-paragraph text-dark">
                            {user.petsitter?.about}
                        </div>
                    </div>

                    <div className="grid gap-[8px] border-b border-bd-gray py-[16px]">
                        <div className="text-body-bold text-black">
                            Experience
                        </div>
                        <div className="text-body-paragraph text-dark">
                            {user.petsitter?.experience}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-subheading text-dark-blue">
                    Reviews({user.petsitter?.reviews.length})
                </div>
                {
                    user.petsitter?.reviews.map((review, index) => (<ReviewCard key={index} review={review} />))
                }
            </div>
        </>
    );
}
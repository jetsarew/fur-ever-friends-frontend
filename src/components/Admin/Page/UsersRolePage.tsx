import { AdminPetOwnerCard, AdminPetSitterCard } from "@/components/Admin/Card/AccountUserCard"

export function PetOwnerPage() {
    return (
        <>
            <AdminPetOwnerCard />
            <div className="border border-bd-gray py-[24px] px-[16px] rounded-[8px] h-fit grid gap-[16px]">
                <div className="text-subheading text-dark-blue">
                    Pets
                </div>
                <div className="flex justify-between">
                    Pet cards
                </div>
            </div>
        </>
    );
}

export function PetSitterPage() {
    return (
        <>
            <AdminPetSitterCard />
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
                            Your pet’s happiness is my top priority, and I treat them like family every time.                                    </div>
                    </div>

                    <div className="grid gap-[8px] border-b border-bd-gray py-[16px]">
                        <div className="text-body-bold text-black">
                            About
                        </div>
                        <div className="text-body-paragraph text-dark">
                            Hi, I’m Kirana, a passionate pet lover with 5 years of experience in pet sitting. Caring for animals has always been a joy for me, and I’m dedicated to providing your pets with the same love and attention they get at home. Whether it’s a fun walk in the park, playtime, or some quiet cuddles, I’m here to make sure your furry friends are happy, healthy, and well-cared for. I’m reliable, responsible, and always go the extra mile to ensure peace of mind for pet owners.                                    </div>
                    </div>

                    <div className="grid gap-[8px] border-b border-bd-gray pt-[16px]">
                        <div className="text-body-bold text-black">
                            Experience
                        </div>
                        <div className="text-body-paragraph text-dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur aliquam minima suscipit tenetur, quam voluptate dignissimos cum accusantium sapiente adipisci necessitatibus alias ipsa, maxime eligendi impedit sint mollitia atque?
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-subheading text-dark-blue">
                    Reviews(99)
                </div>
                <div>
                    Reviewsss
                </div>
            </div>
        </>
    );
}
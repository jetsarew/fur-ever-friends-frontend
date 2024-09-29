import { BlockButton, UnblockButton } from "../Button/BlockButton";

export function AdminPetOwnerCard() {
    return (
        <div className="w-fit rounded-[8px] py-[24px] px-[16px] border border-bd-gray">
            <div className="w-[886px] grid gap-[16px]">
                <div className="flex justify-between">
                    <div className="text-subheading text-dark-blue">
                        Account
                    </div>
                    {/* <BlockButton /> */}
                    <UnblockButton />
                </div>
                <div className="w-fill grid grid-cols-[100px_1fr] gap-[64px]">
                    <div className="w-[100px] h-[100px] rounded-[50px] border-[3px] border-bright-blue">

                    </div>
                    <div className="grid gap-[32px]">

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    ID
                                </div>
                                <div className="text-body text-dark">
                                    0123456789
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Created at
                                </div>
                                <div className="text-body text-dark">
                                    10/10/2024
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Status
                                </div>
                                <div className="text-body text-dark">
                                    enabled
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Username
                                </div>
                                <div className="text-body text-dark">
                                    Anntonia Porsild
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Email
                                </div>
                                <div className="text-body text-dark">
                                    porsild@gmail.com
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Role
                                </div>
                                <div className="text-body text-dark">
                                    pet owner
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Phone number
                                </div>
                                <div className="text-body text-dark">
                                    0123456789
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Activity Completed
                                </div>
                                <div className="text-body text-dark">
                                    200
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export function AdminPetSitterCard() {
    return (
        <div className="w-fit rounded-[8px] py-[24px] px-[16px] border border-bd-gray">
            <div className="w-[886px] grid gap-[16px]">
                <div className="flex justify-between">
                    <div className="text-subheading text-dark-blue">
                        Account
                    </div>
                    <BlockButton />
                    {/* <UnblockButton /> */}
                </div>
                <div className="w-fill grid grid-cols-[100px_1fr] gap-[64px]">
                    <div className="w-[100px] h-[100px] rounded-[50px] border-[3px] border-bright-blue">

                    </div>
                    <div className="grid gap-[32px]">

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    ID
                                </div>
                                <div className="text-body text-dark">
                                    0123456789
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Created at
                                </div>
                                <div className="text-body text-dark">
                                    10/10/2024
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Status
                                </div>
                                <div className="text-body text-dark">
                                    enabled
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Username
                                </div>
                                <div className="text-body text-dark">
                                    Kirana Jasmine Chewter
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Email
                                </div>
                                <div className="text-body text-dark">
                                    kirana@gmail.com
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Role
                                </div>
                                <div className="text-body text-dark">
                                    pet sitter
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Phone number
                                </div>
                                <div className="text-body text-dark">
                                    0123456789
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    City
                                </div>
                                <div className="text-body text-dark">
                                    Bangkok, Thailand
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Activity Completed
                                </div>
                                <div className="text-body text-dark">
                                    200
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Reviews
                                </div>
                                <div className="text-body text-dark">
                                    99
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Rating
                                </div>
                                <div className="text-body text-dark">
                                    4.5
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Reported
                                </div>
                                <div className="text-body text-dark">
                                    5
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
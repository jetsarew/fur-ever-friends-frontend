import { CommonUserModel } from "@/types/user.type";
import { BlockButton, UnblockButton } from "../Button/BlockButton";
import { getAttachmentSrc } from "@/hooks/useImage";
import Image from "next/image";

function formatDate(dateString: string) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function AdminPetOwnerCard({ user }: {
    user: CommonUserModel
}) {
    return (
        <div className="w-fit rounded-[8px] py-[24px] px-[16px] border border-bd-gray">
            <div className="w-[886px] grid gap-[16px]">
                <div className="flex justify-between">
                    <div className="text-subheading text-dark-blue">
                        Account
                    </div>
                    {
                        user.accountStatus === "ACTIVE" ? <BlockButton /> : <UnblockButton />
                    }
                </div>
                <div className="w-fill grid grid-cols-[100px_1fr] gap-[64px]">
                    <Image
                        src={getAttachmentSrc(user.avatar)}
                        width={186}
                        height={186}
                        alt={"/default_profile.jpg"}
                        className="w-[100px] h-[100px] border-[3px] border-bright-blue rounded-full object-cover"
                    />
                    <div className="grid gap-[32px]">

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    ID
                                </div>
                                <div className="text-body text-dark">
                                    {user.id}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Created at
                                </div>
                                <div className="text-body text-dark">
                                    {formatDate(user.createdAt)}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Status
                                </div>
                                <div className="text-body text-dark">
                                    {user.accountStatus === "ACTIVE" ? "Enabled" : "Disabled"}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Username
                                </div>
                                <div className="text-body text-dark">
                                    {user.firstname} {user.lastname}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Email
                                </div>
                                <div className="text-body text-dark">
                                    {user.email}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Role
                                </div>
                                <div className="text-body text-dark">
                                    {user.role === "CUSTOMER" ? "pet owner" : "pet sitter"}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Phone number
                                </div>
                                <div className="text-body text-dark">
                                    {user.phone}
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

export function AdminPetSitterCard({ user }: {
    user: CommonUserModel
}) {
    return (
        <div className="w-fit rounded-[8px] py-[24px] px-[16px] border border-bd-gray">
            <div className="w-[886px] grid gap-[16px]">
                <div className="flex justify-between">
                    <div className="text-subheading text-dark-blue">
                        Account
                    </div>
                    {
                        user.accountStatus === "ACTIVE" ? <BlockButton /> : <UnblockButton />
                    }
                </div>
                <div className="w-fill grid grid-cols-[100px_1fr] gap-[64px]">
                    <Image
                        src={getAttachmentSrc(user.avatar)}
                        width={186}
                        height={186}
                        alt={"/default_profile.jpg"}
                        className="w-[100px] h-[100px] border-[3px] border-bright-blue rounded-full object-cover"
                    />
                    <div className="grid gap-[32px]">

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    ID
                                </div>
                                <div className="text-body text-dark">
                                    {user.id}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Created at
                                </div>
                                <div className="text-body text-dark">
                                    {formatDate(user.createdAt)}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Status
                                </div>
                                <div className="text-body text-dark">
                                    {user.accountStatus === "ACTIVE" ? "Enabled" : "Disabled"}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Username
                                </div>
                                <div className="text-body text-dark">
                                    {user.firstname} {user.lastname}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Email
                                </div>
                                <div className="text-body text-dark">
                                    {user.email}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Role
                                </div>
                                <div className="text-body text-dark">
                                    {user.role === "CUSTOMER" ? "pet owner" : "pet sitter"}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 h-fit">
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Phone number
                                </div>
                                <div className="text-body text-dark">
                                    {user.phone}
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
                                    {user.petsitter?.reviews.length}
                                </div>
                            </div>
                            <div className="grid gap-[8px] h-fit">
                                <div className="text-body-bold text-dark">
                                    Rating
                                </div>
                                <div className="text-body text-dark">
                                    {user.petsitter?.rating}
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
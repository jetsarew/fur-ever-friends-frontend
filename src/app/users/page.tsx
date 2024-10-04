import { ManageUsersHeader } from "@/components/Admin/Card/Header"
import { ManageUsersContent } from "@/components/Admin/Card/Content"
import SearchBar from "@/components/Admin/Input/SearchBar"
import { FilterIcon } from "@/shared/Icon"

export default function UsersPage() {
    const users = {
        "user1": {
            user_id: "0123456789AB",
            src: "/profile.jpg",
            firstname: "Anntonia",
            lastname: "Porsild",
            email: "porsild@gmail.com",
            phone: "0123456789",
            role_id: 0,
            account_status: 0
        },
        "user2": {
            user_id: "0123456789AB",
            src: "/profile.jpg",
            firstname: "Karina",
            lastname: "Jasmine Chewter",
            email: "karina@gmail.com",
            phone: "0123456789",
            role_id: 1,
            account_status: 1
        }
    }


    return (
        <div className="flex flex-col w-max top-[112px] left-[143px] gap-[32px]">
            <div className="flex gap-[16px] items-center">
                <SearchBar />
                <div>
                    <FilterIcon />
                </div>
            </div>
            <div>
                <ManageUsersHeader />
                <ManageUsersContent user={users.user1} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
                <ManageUsersContent user={users.user1} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
                <ManageUsersContent user={users.user2} created_at="10/10/2024" />
            </div>
        </div>
    )
}
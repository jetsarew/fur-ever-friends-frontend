import { ManageUsersHeader } from "@/components/Admin/Card/Header"
import { ManageUsersContent } from "@/components/Admin/Card/Content"
import SearchBar from "@/components/Admin/Input/SearchBar"
import { UsersFilter } from "@/components/Admin/Button/Filter"

interface User {
    user_id: string;
    src: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    role_id: number;
    account_status: number;
}

export default function UsersPage() {
    const users: { [key: string]: User } = {
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
            user_id: "9876543210CD",
            src: "/profile.jpg",
            firstname: "Karina",
            lastname: "Jasmine Chewter",
            email: "karina@gmail.com",
            phone: "0123456789",
            role_id: 1,
            account_status: 1
        },
        "user3": {
            user_id: "1234567890EF",
            src: "/profile.jpg",
            firstname: "Michael",
            lastname: "Johnson",
            email: "michael.johnson@gmail.com",
            phone: "0123456789",
            role_id: 1,
            account_status: 0
        },
        "user4": {
            user_id: "5432167890GH",
            src: "/profile.jpg",
            firstname: "Emily",
            lastname: "Watson",
            email: "emily.watson@gmail.com",
            phone: "0987654321",
            role_id: 1,
            account_status: 1
        },
        "user5": {
            user_id: "7890123456IJ",
            src: "/profile.jpg",
            firstname: "Sophia",
            lastname: "Taylor",
            email: "sophia.taylor@gmail.com",
            phone: "0987654321",
            role_id: 0,
            account_status: 0
        },
        "user6": {
            user_id: "4567890123KL",
            src: "/profile.jpg",
            firstname: "James",
            lastname: "Williams",
            email: "james.williams@gmail.com",
            phone: "0789546123",
            role_id: 0,
            account_status: 0
        },
        "user7": {
            user_id: "3456789012MN",
            src: "/profile.jpg",
            firstname: "Olivia",
            lastname: "Brown",
            email: "olivia.brown@gmail.com",
            phone: "0879654321",
            role_id: 1,
            account_status: 1
        },
        "user8": {
            user_id: "6547890123OP",
            src: "/profile.jpg",
            firstname: "William",
            lastname: "Jones",
            email: "william.jones@gmail.com",
            phone: "0456123789",
            role_id: 0,
            account_status: 1
        },
        "user9": {
            user_id: "9870123456QR",
            src: "/profile.jpg",
            firstname: "Ava",
            lastname: "Martinez",
            email: "ava.martinez@gmail.com",
            phone: "0789654321",
            role_id: 1,
            account_status: 1
        },
        "user10": {
            user_id: "2345678901ST",
            src: "/profile.jpg",
            firstname: "Liam",
            lastname: "Garcia",
            email: "liam.garcia@gmail.com",
            phone: "0561234987",
            role_id: 1,
            account_status: 1
        }
    };

    return (
        <div className="flex flex-col w-max top-[112px] left-[143px] gap-[32px]">
            <div className="flex gap-[16px] items-center">
                <SearchBar />
                <div>
                    <UsersFilter />
                </div>
            </div>
            <div>
                <ManageUsersHeader />
                {Object.keys(users).map((key, index) => (
                    <ManageUsersContent
                        key={index}
                        user={users[key]}
                        created_at="10/10/2024"
                    />
                ))}
            </div>
        </div>
    )
}
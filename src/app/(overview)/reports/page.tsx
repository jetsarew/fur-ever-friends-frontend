import { ViewReportsHeader } from "@/components/Admin/Card/Header"
import { ViewReportsContent } from "@/components/Admin/Card/Content"
import SearchBar from "@/components/Admin/Input/SearchBar"
import { ReportsFilter } from "@/components/Admin/Button/Filter"

export default function ReportsPage() {
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
                    <ReportsFilter />
                </div>
            </div>
            <div>
                <ViewReportsHeader />
                <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={0} />
                <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={1} />
                <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={2} />
                <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={3} />
                <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={4} />
            </div>
        </div>
    )
}
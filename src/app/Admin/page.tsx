import Role from "@/components/Admin/Card/Role"
import UserCard from "@/components/Admin/Card/UserCard";
import AccountStatus from "@/components/Admin/Card/AccountStatus";
import { ManageUsersHeader, ViewReportsHeader, ViewApplicationsHeader } from "@/components/Admin/Card/Header";
import { ManageUsersContent, ViewReportsContent, ViewApplicationsContent } from "@/components/Admin/Card/Content";
import { DefaultAction, BlockedAction, ReportAction, ApplicationAction } from "@/components/Admin/Button/UserAction";
import { UsersFilter, ReportsFilter } from "@/components/Admin/Button/Filter";
import { UserStatusDropdown, UserRoleDropdown } from "@/components/Admin/Button/Dropdown";
import { OptionIcon } from "@/shared/Icon";
import { CalendarIcon, CalendarWithCheckIcon } from "@/shared/Icon";
import SearchBar from "@/components/Admin/Input/SearchBar";

export default function Test() {
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

    return (<div>
        <Role role_id={0} />
        <Role role_id={1} />
        <AccountStatus account_status={0} />
        <AccountStatus account_status={1} />
        <UserCard src="/profile.jpg" firstname="Anntonia" lastname="Porsild" />
        <UserCard src="/profile.jpg" firstname="Karina" lastname="Jasmine Chewter" />
        <DefaultAction />
        <br /><br />
        <BlockedAction />
        <br /><br />
        <ReportAction />
        <br /><br />
        <ApplicationAction />
        <br /><br />

        <UsersFilter />
        <br /><br />
        <ReportsFilter />
        <br /><br />

        <UserStatusDropdown />
        <br /><br />

        <UserRoleDropdown />
        <br /><br />

        <OptionIcon />
        <br /><br />

        <SearchBar />
        <br /><br />

        <CalendarIcon />
        <br /><br />
        <CalendarWithCheckIcon />
        <br /><br />

        <ManageUsersHeader />
        <ManageUsersContent user={users.user1} created_at="10/10/2024" />
        <ManageUsersContent user={users.user2} created_at="10/10/2024" />
        <br /><br />
        <ViewReportsHeader />
        <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={0} />
        <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={1} />
        <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={2} />
        <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={3} />
        <ViewReportsContent id="0123456789" reported_user={users.user1} reporter_user={users.user2} created_at="10/10/2024" report_type={4} />
        <br /><br />
        <ViewApplicationsHeader />
        <ViewApplicationsContent id="0123456789" user={users.user1} created_at="10/10/2024" />
        <ViewApplicationsContent id="0123456789" user={users.user2} created_at="10/10/2024" />
    </div>);
}
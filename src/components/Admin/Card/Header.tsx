export function ManageUsersHeader() {
    return (<div className="w-fit h-[72px] border border-bd-gray grid grid-cols-[174px_270px_240px_140px_135px_115px_80px]">
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">ID</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">User</div>
        <div className="flex text-body-bold text-dark pt-[1px] pl-[16px] pr-[16px] justify-between items-center">Email</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Created at</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-center items-center">Role</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-center items-center">Status</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Action</div>
    </div>);
}

export function ViewReportsHeader() {
    return (<div className="w-fit h-[72px] border border-bd-gray grid grid-cols-[174px_270px_270px_140px_220px_80px]">
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">ID</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Reported user</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Reporter</div>
        <div className="flex text-body-bold text-dark pt-[1px] pl-[16px] pr-[16px] justify-between items-center">Created at</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-center items-center">Report type</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Action</div>
    </div>);
}

export function ViewApplicationsHeader() {
    return (<div className="w-fit h-[72px] border border-bd-gray grid grid-cols-[174px_240px_200px_210px_140px_110px_80px]">
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">ID</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Username</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Email</div>
        <div className="flex text-body-bold text-dark pt-[1px] pl-[16px] pr-[16px] justify-between items-center">Phone number</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Created at</div>
        <div className="flex text-body-bold text-dark justify-center items-center">Status</div>
        <div className="flex text-body-bold text-dark pl-[16px] pr-[16px] justify-between items-center">Action</div>
    </div>);
}

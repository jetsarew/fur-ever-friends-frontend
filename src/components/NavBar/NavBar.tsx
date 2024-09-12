import Image from "next/image";

export default function NavBar(){
    return (
        <div className="h-16 px-[111px] flex flex-row justify-between items-center border-b border-bd-gray">
            <button className="text-header text-bright-blue">FUR-EVER FRIENDS</button>
            <div className="flex flex-row justify-between gap-[102px]">
                <div className="flex flex-row gap-6 color text-button text-medium-gray">
                    <button>Activities</button>
                    <button>My Pets</button>
                </div>
                <Image 
                    src={"/profile.jpg"}
                    width={144}
                    height={144}
                    alt={"profile image"}
                    className="w-12 h-12 rounded-full object-cover"
                />
            </div>
        </div>
    )
}
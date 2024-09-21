import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return (
        <div className="fixed top-0 left-0 right-0 w-full h-16 px-[111px] flex flex-row justify-between items-center border-b border-bd-gray bg-white">
            <Link href={"/"} className="text-header text-bright-blue">FUR-EVER FRIENDS</Link>
            <div className="flex flex-row justify-between gap-[102px]">
                <div className="flex flex-row items-center gap-6 color text-button text-medium-gray">
                    <Link
                        href="/activity"
                    >Activities</Link>
                    <Link
                        href="/pet"
                    >My pets</Link>
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
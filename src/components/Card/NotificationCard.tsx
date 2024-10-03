import { DotIcon } from "@/shared/Icon";
import Image from "next/image";
import Link from "next/link";
interface NotificationCardProps {
    clickHandler: () => void
}
export default function NotificationCard({ clickHandler }: NotificationCardProps){
    return (
        <Link
            href="/activity/123"
            className="w-full px-6 py-4 flex flex-row gap-4 border-b border-bd-gray hover:bg-[#F8F8F8]"
            onClick={clickHandler}
        >
            <Image 
                src="/profile.jpg"
                width={80}
                height={80}
                alt="profile image"
                className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-row flex-wrap gap-1 items-baseline">
                    <span className="text-small-bold text-dark underline">Anntonia</span>
                    <span className="text-small-paragraph text-standard-gray">has invited you to check out</span>
                    <span className="text-small-bold text-dark underline">Whiskers & Buddy Outing</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-small text-soft-gray">December 31, 2024</span>
                    <span><DotIcon /></span>
                    <span className="text-small text-soft-gray">11:59 AM</span>
                </div>
            </div>
        </Link>
    );
}
import Link from "next/link";
interface ActivityNavBarButtonProps{
    name: string
    href: string
    active: boolean
}
export default function ActivityNavBarButton({ name, href, active }: ActivityNavBarButtonProps){
    return (
        <Link href={href}
            className={`flex-1 py-4 text-button ${active ? "text-dark-blue border-b-[3px] border-dark-blue" : "text-soft-gray"} text-center`}
        >
            {name}
        </Link>
    );
}
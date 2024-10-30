import Image from "next/image";

export default function TableUserCard({ src, firstname, lastname }: {
    src?: string;
    firstname: string;
    lastname: string;
}) {
    return (
        <div className="flex w-[270px] h-[72px] pl-[16px] pr-[16px]">
            <div className="flex justify-between gap-[16px] items-center">
                {src &&
                    <Image src={src!} alt={""} width={40} height={40} className="rounded-[20px] w-[40px] h-[40px] object-cover" />
                }
                <div className="text-standard-gray text-body w-[159px] leading-[1]">{firstname} {lastname}</div>
            </div>
        </div>
    )
}

export function ApplicationUserCard({ firstname, lastname }: {
    firstname: string;
    lastname: string;
}) {
    return (
        <div className="flex w-[270px] h-[72px] pl-[16px] pr-[16px]">
            <div className="flex justify-between gap-[16px] items-center">
                <div className="text-standard-gray text-body w-[159px] leading-[1]">{firstname} {lastname}</div>
            </div>
        </div>
    )
}

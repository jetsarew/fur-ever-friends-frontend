import { timeAgo } from "@/hooks/useConvertTime";
import { getAttachmentSrc } from "@/hooks/useImage";
import { ProgressModelResponse } from "@/types/response.type";
import Image from "next/image";

interface ActivityProgressCardInterface {
    progress: ProgressModelResponse
}

export default function ActivityProgressCard({ progress }: ActivityProgressCardInterface){
    if(progress.images.length == 0) return null;

    return (
        <div className="w-[443px] flex flex-col border border-bd-gray rounded-lg overflow-hidden pop-up-shadow">
            <Image 
                src={getAttachmentSrc(progress.images[0])}
                width={850}
                height={450}
                alt={"activity progress picture"}
                className="w-full h-[220px] object-cover"
            />
            <div className="px-8 py-4 flex flex-col gap-4">
                <p className="text-body-paragraph">{progress.content}</p>
                <p className="text-small text-end text-soft-gray">{timeAgo(progress.createdAt)}</p>
            </div>
        </div>
    );
}
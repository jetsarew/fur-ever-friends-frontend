import { formatUTCDate } from "@/hooks/useConvertTime";
import { getAttachmentSrc } from "@/hooks/useImage";
import { ReviewModelResponse } from "@/types/response.type";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface ReviewCardInterface {
    review: ReviewModelResponse;
}

export default function ReviewCard({ review } : ReviewCardInterface) {
    return (
        <div className="py-8 flex flex-row items-start gap-6 border-b border-bd-gray">
            <Image
                src={review.customer.user.avatar ? getAttachmentSrc(review.customer.user.avatar): "/default_profile.jpg"}
                width={120}
                height={120}
                alt="profile image"
                className="w-[60px] h-[60px] border-[3px] border-bright-blue rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-body-bold text-dark-blue">{review.customer.user.firstname + " " + review.customer.user.lastname}</p>
                        <div className="flex flex-row gap-1">
                            <StarIcon className={`w-6 h-6 ${review.rating >= 1 ? "text-golden-yellow" : "text-light-gray2"}`} />
                            <StarIcon className={`w-6 h-6 ${review.rating >= 2 ? "text-golden-yellow" : "text-light-gray2"}`} />
                            <StarIcon className={`w-6 h-6 ${review.rating >= 3 ? "text-golden-yellow" : "text-light-gray2"}`} />
                            <StarIcon className={`w-6 h-6 ${review.rating >= 4 ? "text-golden-yellow" : "text-light-gray2"}`} />
                            <StarIcon className={`w-6 h-6 ${review.rating >= 5 ? "text-golden-yellow" : "text-light-gray2"}`} />
                        </div>
                    </div>
                    <p className="text-body-paragraph">{review.content}</p>
                </div>
                <p className="text-small text-standard-gray">{formatUTCDate(review.createdAt)}</p>
            </div>
        </div>
    )
}
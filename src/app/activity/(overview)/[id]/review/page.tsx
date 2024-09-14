export default function ActivityReviewPage({ params }: {
    params: { id: string }
}
){
    return (
        <div>
            Activity id{params.id} review
        </div>
    )
}
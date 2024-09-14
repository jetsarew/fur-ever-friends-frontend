export default function ActivityProgressPage({ params }: {
    params: { id: string }
}
){
    return (
        <div>
            Activity id{params.id} progress
        </div>
    )
}
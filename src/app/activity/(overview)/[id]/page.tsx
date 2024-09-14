export default function ActivityDetailPage({ params }: {
    params: { id: string }
}
){
    return (
        <div>
            Activity id{params.id}
        </div>
    )
}
export default function ActivityReportPage({ params }: {
    params: { id: string }
}
){
    return (
        <div>
            Activity id{params.id} report
        </div>
    )
}
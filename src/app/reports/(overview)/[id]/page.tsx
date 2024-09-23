export default function ReportPage({ params }: {
    params: { id: string }
}){
    return (
        <div>
            Report id{params.id}
        </div>
    )
}
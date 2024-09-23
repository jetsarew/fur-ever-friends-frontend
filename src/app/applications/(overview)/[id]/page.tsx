export default function ApplicationPage({ params }: {
    params: { id: string }
}){
    return (
        <div>
            Application id{params.id}
        </div>
    )
}
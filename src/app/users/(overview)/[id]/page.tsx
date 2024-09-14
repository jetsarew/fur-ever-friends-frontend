export default function UserPage({ params }: {
    params: { id: string }
}){
    return (
        <div>
            User id{params.id}
        </div>
    )
}
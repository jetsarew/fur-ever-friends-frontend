export default function ProfilePage({ params }: {
    params: { id: string }
}){
    return (
        <div>
            Profile id{params.id}
        </div>
    )
}
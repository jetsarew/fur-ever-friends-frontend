export default function PaymentPage({ params }: {
    params: { id: string }
}
){
    return (
        <div>
            Payment for activity id{params.id}
        </div>
    )
}
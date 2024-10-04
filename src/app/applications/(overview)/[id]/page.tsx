export default function ApplicationPage({ params }: {
    params: { id: string }
}) {
    return (
        <div className="absolute flex flex-col gap-[32px] top-[172px] left-[261px] w-[918px] rounded-[8px] border boredr-bd-gray py-[24px] px-[16px]">
            <div className="flex justify-between">
                <div className="text-subheading text-dark-blue">
                    Application
                </div>
                <div className="flex gap-[16px]">
                    <button className="bg-bright-green text-button text-white py-[8px] px-[24px] rounded-[8px]">
                        Accept
                    </button>
                    <button className="text-button text-bright-red border border-bright-red py-[8px] px-[24px] rounded-[8px]">
                        Reject
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="grid gap-[8px]">
                    <div className="text-body-bold text-dark">
                        Username
                    </div>
                    <div className="text-body text-dark">
                        Kirana Jasmine Chewter {params.id}
                    </div>
                </div>
                <div className="grid gap-[8px]">
                    <div className="text-body-bold text-dark">
                        Email
                    </div>
                    <div className="text-body text-dark">
                        kirana@gmail.com
                    </div>
                </div>
                <div className="grid gap-[8px]">
                    <div className="text-body-bold text-dark">
                        Phone number
                    </div>
                    <div className="text-body text-dark">
                        0123456789
                    </div>
                </div>
            </div>
            <div className="grid gap-[8px]">
                <div className="text-body-bold text-dark">
                    Certificate
                </div>
                <div className="border border-bd-gray rounded-[8px] p-[8px]">
                    Image
                </div>
            </div>
        </div>
    )
}
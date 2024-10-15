export default function ReportPage({ params }: {
    params: { id: string }
}) {
    console.log(params.id)
    return (
        <div className="w-[1154px] grid gap-[32px]">
            <div className="text-header text-bright-blue">Whiskers & Buddy Outing</div>
            <div className="flex justify-between">
                <div className="w-[561px]">
                    cards
                </div>
                <div className="grid gap-[16px] w-[561px] border border-bd-gray rounded-[8px] py-[24px] px-[16px]">
                    <div className="text-subheading text-bright-red">
                        Report
                    </div>
                    <div className="grid gap-[8px]">
                        <div className="text-body-bold text-dark">
                            Report type
                        </div>
                        <div className="text-body text-dark">
                            Unprofessional Behavior
                        </div>
                    </div>

                    <div className="grid gap-[8px]">
                        <div className="text-body-bold text-dark">
                            Description
                        </div>
                        <div className="text-small-paragraph text-paragraph-gray">
                            The pet sitter showed up late without prior notice and appeared distracted during the pet sitting session. They did not follow the instructions I provided, such as feeding the pet on time and taking them for a walk. Additionally, their attitude was dismissive when I raised concerns about the care of my pet
                        </div>
                    </div>

                    <div className="grid gap-[8px]">
                        <div className="text-body-bold text-dark">
                            Reported by
                        </div>
                        <div className="flex gap-[8px] items-center">
                            <div className="w-[24px] h-[24px] rounded-[12px] border border-bright-blue">

                            </div>
                            <div className="text-body text-dark">
                                Anntonia Porsild
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-[8px]">
                        <div className="text-body-bold text-dark">
                            Date
                        </div>
                        <div className="text-small text-standard-gray">
                            10/10/2024
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-bd-gray rounded-[8px] py-[24px] px-[16px] grid gap-[16px]">
                <div className="text-subheading text-dark-blue">
                    Pet Activities
                </div>
                <div>
                    Activities
                </div>
            </div>
        </div >
    )
}
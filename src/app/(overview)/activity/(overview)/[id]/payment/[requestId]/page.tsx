import Image from "next/image"

export default function PaymentPage({  }: {
    params: { id: string, requestId: string }
}
){
    console.log(params);
    return (
        <div className="-mt-9 flex flex-col min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-12 w-[680px]">
            <div className="flex flex-col items-start gap-12 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch p-6 px-4 rounded-lg border-2 border-bd-gray">
                <div className='flex justify-between items-end self-stretch'>
                    <div className='flex items-end' style={{ gap: 'var(--Space-200, 8px)' }}>
                    <Image src="/pet-sitter.jpg" width={80} height={80} alt="Pet Sitter" className="w-10 h-10 rounded-[40px] border-[3px] border-bright-blue object-cover object-center"/>
                    <p className='text-dark-blue text-subheading'>Kirana Jasmine Chewter</p>
                    </div>
                    <p className='text-bright-green text-subheading'>$99</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className='text-bright-blue text-subheading2'>Whiskers & Buddy Outing</p>
                    <div className="flex items-center gap-1">
                    <Image src="/Whiskers.jpg" width={64} height={64} alt="Whiskers" className='w-8 h-8 rounded-[40px] border-[2px] border-bright-blue object-cover object-center' />
                    <Image src="/Whiskers.jpg" width={64} height={64} alt="Whiskers" className='w-8 h-8 rounded-[40px] border-[2px] border-bright-blue object-cover object-center' />
                    </div>
                </div>
                <div className="flex flex-col items-start self-strFetch">
                    <div className="flex items-end gap-8 pb-4 self-stretch border-b border-gray-200">
                    <div className="flex flex-col items-start gap-2 w-[308px]">
                        <p className="text-dark text-body-bold">Start</p>
                        <p className="text-dark text-body">December 31, 2024 at 07:00 am</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 w-[308px]">
                        <p className="text-dark text-body-bold">End</p>
                        <p className="text-dark text-body">December 31, 2024 at 06:00 pm</p>
                    </div>
                    </div>
                    <div className="flex items-end gap-8 pt-4 self-stretch">
                    <div className="flex items-end gap-2 w-[308px]">
                        <Image src="/location.svg" width={48} height={48} alt="Meme Dog" className='w-6 h-6 rounded-full' />
                        <p className="text-dark text-body">KMITL ECC Building</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="flex flex-col items-start gap-8 self-stretch">
                <div className="flex flex-col items-start gap-8 self-stretch">
                    <h2 className="text-dark-blue text-subheading2">Payment Detail</h2>
                    <div className="flex flex-col items-start gap-4 self-stretch">
                    <div className="flex flex-col items-start gap-3 self-stretch">
                        <label className="text-dark text-body-bold">Name on Card</label>
                        <input
                        type="text"
                        className="flex items-start gap-3 self-stretch p-[15px_18px] rounded-lg border border-light-gray2 bg-transparent"
                        placeholder="Enter Name"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-3 self-stretch">
                        <label className="text-dark text-body-bold">Card Number</label>
                        <input
                        type="text"
                        className="flex items-start gap-3 self-stretch p-[15px_18px] rounded-lg border border-light-gray2 bg-transparent"
                        placeholder="Enter Number"
                        />
                    </div>
                    <div className="flex items-start gap-8 self-stretch">
                        <div className="flex flex-col items-start gap-3 flex-1">
                        <label className="text-dark text-body-bold">Expiration</label>
                        <input
                            type="text"
                            className="flex items-start gap-3 self-stretch p-[15px_18px] rounded-lg border border-light-gray2 bg-transparent"
                            placeholder="Expiration Date"
                        />
                        </div>
                        <div className="flex flex-col items-start gap-3 flex-[1_0_0]">
                        <label className="text-dark text-body-bold">CVC</label>
                        <input
                            type="text"
                            className="flex items-start gap-3 self-stretch p-[15px_18px] rounded-lg border border-light-gray2 bg-transparent"
                            placeholder="Card Verification Code"
                        />
                        </div>
                    </div>
                    </div>
                </div>   
                </div>
            </div>
                <button
                type="submit"
                className="flex justify-center items-center gap-3 py-4 px-6 rounded-lg bg-bright-blue text-body text-white text-button"
                >
                Confirm
                </button>
            </div>
        </div>
    )
}
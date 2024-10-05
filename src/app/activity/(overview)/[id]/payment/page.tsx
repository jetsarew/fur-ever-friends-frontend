export default function PaymentPage({ params }: {
    params: { id: string }
}
){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center gap-12 w-[680px]">
            <div className="flex flex-col items-start gap-12 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch p-6 px-4 rounded-lg border-2 border-[#E5EBEB]">
                <div className='flex justify-between items-end self-stretch'>
                    <div className='flex items-end' style={{ gap: 'var(--Space-200, 8px)' }}>
                    <img src="/pet-sitter.jpg" alt="Pet Sitter" className="w-10 h-10 rounded-[40px] border-[3px] border-[#1D9BF0] object-cover object-center"/>
                    <p className='text-[#1C7DBB] font-poppins text-2xl font-semibold leading-[24px]'>Kirana Jasmine Chewter</p>
                    </div>
                    <p className='text-[#05CE78] font-poppins text-2xl font-semibold leading-[20.4px]'>$99</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className='text-[#1D9BF0] font-poppins text-xl font-semibold leading-[20px]'>Whiskers & Buddy Outing</p>
                    <div className="flex items-center gap-1">
                    <img src="/Whiskers.jpg" alt="Whiskers" className='w-8 h-8 rounded-[40px] border-[2px] border-[#1D9BF0] object-cover object-center' />
                    <img src="/meme-dog.jpg" alt="Meme Dog" className='w-8 h-8 rounded-[40px] border-[2px] border-[#1D9BF0] object-cover object-center' />
                    </div>
                </div>
                <div className="flex flex-col items-start self-strFetch">
                    <div className="flex items-end gap-8 pb-4 self-stretch border-b border-gray-200">
                    <div className="flex flex-col items-start gap-2 w-[308px]">
                        <p className="text-[#333333] font-poppins text-base font-medium leading-[16px]">Start</p>
                        <p className="text-[#333333] font-poppins text-base font-normal leading-[16px]">December 31, 2024 at 07:00 am</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 w-[308px]">
                        <p className="text-[#333333] font-poppins text-base font-medium leading-[16px]">End</p>
                        <p className="text-[#333333] font-poppins text-base font-normal leading-[16px]">December 31, 2024 at 06:00 pm</p>
                    </div>
                    </div>
                    <div className="flex items-end gap-8 pt-4 self-stretch">
                    <div className="flex items-end gap-2 w-[308px]">
                        <img src="/location.svg" alt="Meme Dog" className='w-6 h-6 rounded-full' />
                        <p className="text-[#333333] font-poppins text-base font-normal leading-[16px]">KMITL ECC Building</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="flex flex-col items-start gap-8 self-stretch">
                <div className="flex flex-col items-start gap-8 self-stretch">
                    <h2 className="text-[#1C7DBB] font-poppins text-xl font-semibold leading-[20px]">Payment Detail</h2>
                    <div className="flex flex-col items-start gap-4 self-stretch">
                    <div className="flex flex-col items-start gap-[11px] self-stretch">
                        <label className="text-[#333333] font-poppins text-base font-medium leading-[16px]">Name on Card</label>
                        <input
                        type="text"
                        className="flex items-start gap-[10px] self-stretch p-[15px_18px] rounded-lg border border-[#D9D9D9] bg-transparent"
                        placeholder="Enter Name"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-[11px] self-stretch">
                        <label className="text-[#333333] font-poppins text-base font-medium leading-[16px]">Card Number</label>
                        <input
                        type="text"
                        className="flex items-start gap-[10px] self-stretch p-[15px_18px] rounded-lg border border-[#D9D9D9] bg-transparent"
                        placeholder="Enter Number"
                        />
                    </div>
                    <div className="flex items-start gap-8 self-stretch">
                        <div className="flex flex-col items-start gap-[11px] flex-1">
                        <label className="text-[#333333] font-poppins text-base font-medium leading-[16px]">Expiration</label>
                        <input
                            type="text"
                            className="flex items-start gap-[10px] self-stretch p-[15px_18px] rounded-lg border border-[#D9D9D9] bg-transparent"
                            placeholder="Expiration Date"
                        />
                        </div>
                        <div className="flex flex-col items-start gap-[11px] flex-[1_0_0]">
                        <label className="text-[#333333] font-poppins text-base font-medium leading-[16px]">CVC</label>
                        <input
                            type="text"
                            className="flex items-start gap-[10px] self-stretch p-[15px_18px] rounded-lg border border-[#D9D9D9] bg-transparent"
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
                className="flex justify-center items-center gap-[10px] py-4 px-6 rounded-lg bg-[#1D9BF0] text-white"
                >
                Confirm
                </button>
            </div>
        </div>
    );
}
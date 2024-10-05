import Image from 'next/image';


export default function FeedCard() {
  return (
    <div className="text-black border rounded-[8px] px-6 p-6 flex flex-col-2 gap-2">


      <div>
        <Image
          src="/Whiskers.jpg"
          width={60}
          height={60}
          alt="Picture of the author"
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
      </div>
      <div className="grid grid-row-4 gap-4">
        <div className="flex">
          <p className="font-bold">Anntonia Porsid</p>
          <p className="text-gray-400">&nbsp;&#x2022;&nbsp;3 Day left</p>
        </div>

        <div className="flex gap-2 items-center">

          <p className="text-[#1D9BF0]  text-xl font-bold">
            Whisker & Buddy outing
          </p>
          
          <div className="flex gap-2">
            {/* Wrapper for border styling */}
            <div className="rounded-full border-4 border-[#1D9BF0] p-[2px]">
              <Image
                src="/Whiskers.jpg"
                width={40}
                height={40}
                alt="Picture of the author"
                className="rounded-full w-[40px] h-[40px] object-cover"
              />
            </div>

            <div className="rounded-full border-4 border-[#1D9BF0] p-[2px]">
              <Image
                src="/Whiskers.jpg"
                width={40}
                height={40}
                alt="Picture of the author"
                className="rounded-full w-[40px] h-[40px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex clex-col-2 gap-8 py-4 ">
          <div>
            <p className="font-bold">Start</p>
            <p>December 31, 2024 at 7:00 am</p>
          </div>

          <div>
            <p className="font-bold">End</p>
            <p>December 31, 2024 at 6:00 pm</p>
          </div>
        </div>
        <hr />
        <div className="flex">
          <Image
            src="/location.svg"
            width={24}
            height={24}
            alt="Location icon"
          />
          <p>KMITL ECC Building &nbsp;</p>
          <p className="text-gray-400">(5.4&nbsp;km)</p>
        </div>
      </div>
    </div>
  );
}

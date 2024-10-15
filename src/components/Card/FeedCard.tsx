import Image from "next/image";
import Link from "next/link";

export default function FeedCard() {
  return (
    <Link href={"/activity/1234"} className="w-[680px] border rounded-[8px] px-4 py-6 flex flex-row gap-2">
      <div>
        <Image
          src="/Whiskers.jpg"
          width={120}
          height={120}
          alt="Picture of the author"
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-row items-baseline">
          <p className="text-body-bold">Anntonia Porsid</p>
          <p className="text-soft-gray text-body">
            &nbsp;&#x2022;&nbsp;3 Day left
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <p className="text-bright-blue text-subheading2">
              Whisker & Buddy outing
            </p>

            <div className="flex gap-1">
              {/* Wrapper for border styling */}
              <div className="rounded-full border-[3px] border-bright-blue">
                <Image
                  src="/Whiskers.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                  className="rounded-full w-[40px] h-[40px] object-cover"
                />
              </div>

              <div className="rounded-full border-[3px] border-bright-blue">
                <Image
                  src="/Whiskers.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                  className="rounded-full w-[40px] h-[40px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="py-4 flex flex-row gap-8 border-b border-bd-gray">
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-body-bold">Start</p>
              <p>December 31, 2024 at 7:00 am</p>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-body-bold">End</p>
              <p>December 31, 2024 at 6:00 pm</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-end pt-3">
            <Image
              src="/location.svg"
              width={24}
              height={24}
              alt="Location icon"
            />
            <div className="flex flex-row items-baseline gap-1">
              <p className="text-body">KMITL ECC Building</p>
              <p className="text-small text-soft-gray">(5.4&nbsp;km)</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

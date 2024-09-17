import Image from "next/image";

export default function ActivityProgressCard(){
    return (
        <div className="w-[443px] flex flex-col border border-bd-gray rounded-lg overflow-hidden pop-up-shadow">
            <Image 
                src="/progress.jpg"
                width={850}
                height={450}
                alt={"activity progress picture"}
                className="w-full h-[220px] object-cover"
            />
            <div className="px-8 py-4 flex flex-col gap-4">
                <p className="text-body-paragraph">At first, he was a bit fidgety, but once I got her comfortable, she relaxed. I was careful to avoid the quick, and there were no issues.</p>
                <p className="text-small text-end text-soft-gray">5 minutes ago</p>
            </div>
        </div>
    );
}
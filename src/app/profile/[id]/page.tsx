import ReviewCard from "@/components/Card/ReviewCard";
import SlideImage from "@/components/Card/SlideImage";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function ProfilePage({ params }: {
    params: { id: string }
}){
    console.log(params.id);
    return (
        <div className="w-[918px] mx-auto flex flex-row items-start gap-8">
            <div className="w-[562px] flex flex-col gap-8">
                <SlideImage />
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-subheading text-dark-blue">About</h2>
                        <p className="text-body-paragraph">Hi, I’m Kirana, a passionate pet lover with 5 years of experience in pet sitting. Caring for animals has always been a joy for me, and I’m dedicated to providing your pets with the same love and attention they get at home. Whether it’s a fun walk in the park, playtime, or some quiet cuddles, I’m here to make sure your furry friends are happy, healthy, and well-cared for. I’m reliable, responsible, and always go the extra mile to ensure peace of mind for pet owners.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-subheading text-dark-blue">My experience</h2>
                        <p className="text-body-paragraph">With over 5 years of experience in pet sitting, I have had the pleasure of caring for a wide variety of pets, including dogs, cats, birds, and small mammals. I’ve worked with pets of all ages, from playful puppies and kittens to senior pets requiring special attention and care.
                        <br/><br/>I have experience with administering medications, following specific dietary needs, and handling pets with unique behavioral traits. My clients appreciate my reliability and the peace of mind they get knowing their pets are in good hands. I take pride in my ability to form strong bonds with pets, ensuring they are happy, comfortable, and well-cared for while their owners are away.</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2 text-subheading text-dark-blue">
                            <p>Reviews</p> 
                            <p>{`(${99})`}</p>
                        </div>
                        <div>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[324px] flex flex-col border border-bd-gray rounded-lg sticky top-[80px] pop-up-shadow">
                <div className="pt-4 flex flex-row">
                    <div className="p-4 pl-6">
                        <Image 
                            src="/pet-sitter.jpg"
                            width={286}
                            height={286}
                            alt={"pet sitter profile picture"}
                            className="w-[143px] h-[143px] border-[3px] border-bright-blue rounded-full object-cover"
                        />
                    </div>
                    <div className="flex-1 p-4 pl-0 pr-6 flex flex-col items-start">
                        <div className="w-full pb-2 flex flex-col items-start gap-1 border-b border-bd-gray">
                            <p className="h-5 text-subheading text-bright-green">99</p>
                            <p className="text-[14px] font-normal leading-[100%]">Reviews</p>
                        </div>
                        <div className="w-full py-2 flex flex-col items-start gap-1 border-b border-bd-gray">
                            <div className="flex flex-row items-end">
                                <p className="h-5 text-subheading text-golden-yellow">4.5</p>
                                <StarIcon className="w-5 h-5 text-golden-yellow"/>
                            </div>
                            <p className="text-[14px] font-normal leading-[100%]">Rating</p>
                        </div>
                        <div className="w-full pt-2 flex flex-col items-start gap-1">
                            <p className="h-5 text-subheading text-bright-blue">200</p>
                            <p className="text-[14px] font-normal leading-[100%]">Activities done</p>
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-8 flex flex-col gap-4">
                    <h1 className="text-header text-dark-blue">Kirana Jasmine Chewter</h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-body-paragraph">Your pet’s happiness is my top priority, and I treat them like family every time.</p>
                        <p className="text-body text-medium-gray">Bangkok, Thailand</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
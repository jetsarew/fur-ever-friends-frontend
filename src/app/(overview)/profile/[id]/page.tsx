"use client";

import FavoriteButton from "@/components/Button/FavoriteButton";
import InviteButton from "@/components/Button/InviteButton";
import ReviewCard from "@/components/Card/ReviewCard";
import SlideImage from "@/components/Card/SlideImage";
import Tag from "@/components/Tag/Tag";
import { Toast } from "@/components/Toast/Toast";
import { getAttachmentSrc } from "@/hooks/useImage";
import { activityService } from "@/services/activity.service";
import { favoriteService } from "@/services/favorite.service";
import { userService } from "@/services/user.service";
import { BirdIcon, CatIcon, DogIcon, ExerciseIcon, FeedingIcon, FishIcon, GroomingIcon, MedicationIcon, RabbitIcon, RelaxationIcon, ReptileIcon, RodentIcon, TrainingIcon } from "@/shared/Icon";
import { useAppSelector } from "@/store/hooks";
import { ActivityModelResponse, FavoriteModelResponse } from "@/types/response.type";
import { CommonUserModel } from "@/types/user.type";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage({ params }: {
    params: { id: string }
}){
    const myData = useAppSelector((state) => state.auth.user);
    const [userData, setUserData] = useState<CommonUserModel | null>(null);
    const [favorites, setFavorites] = useState<FavoriteModelResponse[]>([]);
    const [activities, setActivities] = useState<ActivityModelResponse[]>([]);
    const router = useRouter();

    const getUser = async () => {
        try {
            if(myData?.id == params.id){
                setUserData(myData);
            }
            else{
                const response = await userService.getUser(params.id);
                setUserData(response);
                console.log(response);
                getFavorites();
            } 
        } catch (error) {
            Toast("Profile not founded", "error");
            router.push("/");
        }
    };
    const getFavorites = async () => {
        try {
            const response = await favoriteService.getMyFavorite();
            console.log(response);
            setFavorites(response);
        } catch (error) {
            router.push("/");
        }
    };

    const onFavoriteButtonClick = async (isAdded: boolean) => {
        try {
            if(isAdded) {
                const favoriteId = favorites.filter((favorite) => favorite.petsitter.id == userData?.petsitter?.id)[0].id;
                const response = await favoriteService.removeFromFavorite(favoriteId);
                console.log(response);
            }
            else {
                if(!myData?.customer?.id || !userData?.petsitter?.id) {
                    return;
                }
                const response = await favoriteService.addToFavorite({
                    customerId: myData?.customer?.id,
                    petsitterId: userData?.petsitter?.id,
                });
                console.log(response);
            }
            getUser();
            getFavorites();
            router.refresh();
        } catch(error) {
            
        }
    }

    useEffect(() => {
        const fetchMyActivities = async () => {
            let response;
            
            if(userData?.role == "CUSTOMER"){
                response = await activityService.getMyActivity();
            }
            else {
                response = await activityService.getActivitiesByPetSitter();
            }
            
            console.log(response);
            setActivities(response.filter((activity) => {
                return activity.state == "COMPLETED";
            }));
        }
        getUser();
        fetchMyActivities();
    }, [params.id])
    
    return (
        <div className="w-[918px] mx-auto flex flex-row items-start gap-8">
            <div className="w-[562px] flex flex-col gap-8">
                <SlideImage coverImages={userData?.petsitter?.coverImages ?? []}/>
                <div className="pb-8 flex flex-row flex-wrap gap-x-6 gap-y-2 border-b border-bd-gray">
                    <Tag 
                        icon={<DogIcon />}
                        text="Dogs"
                        type="animal"
                    />
                    <Tag 
                        icon={<CatIcon />}
                        text="Cats"
                        type="animal"
                    />
                    <Tag 
                        icon={<RabbitIcon />}
                        text="Rabbits"
                        type="animal"
                    />
                    <Tag 
                        icon={<RodentIcon />}
                        text="Rodents"
                        type="animal"
                    />
                    <Tag 
                        icon={<BirdIcon />}
                        text="Birds"
                        type="animal"
                    />
                    <Tag 
                        icon={<ReptileIcon />}
                        text="Reptiles"
                        type="animal"
                    />
                    <Tag 
                        icon={<FishIcon />}
                        text="Fish"
                        type="animal"
                    />
                    <Tag 
                        icon={<FeedingIcon />}
                        text="Feeding"
                        type="service"
                    />
                    <Tag 
                        icon={<ExerciseIcon />}
                        text="Exercise"
                        type="service"
                    />
                    <Tag 
                        icon={<GroomingIcon />}
                        text="Grooming"
                        type="service"
                    />
                    <Tag 
                        icon={<TrainingIcon />}
                        text="Training"
                        type="service"
                    />
                    <Tag 
                        icon={<RelaxationIcon />}
                        text="Relaxation"
                        type="service"
                    />
                    <Tag 
                        icon={<MedicationIcon />}
                        text="Administering Medication"
                        type="service"
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-subheading text-dark-blue">About</h2>
                        <p className="text-body-paragraph">{userData?.petsitter?.about}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-subheading text-dark-blue">My experience</h2>
                        <p className="text-body-paragraph">{userData?.petsitter?.experience}</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2 text-subheading text-dark-blue">
                            <p>Reviews</p> 
                            <p>{`(${userData?.petsitter?.reviews.length})`}</p>
                        </div>
                        <div>
                            {
                                userData?.petsitter?.reviews.map((review, index) => {
                                    return <ReviewCard key={index} review={review}/>
                                })
                            }
                            {
                                userData?.petsitter?.reviews.length == 0 && 
                                <div className="pt-[36px] w-full flex flex-col items-center gap-6">
                                    <Image 
                                        src={"/empty.svg"}
                                        width={200}
                                        height={200}
                                        alt={"not found"}
                                    />
                                    <p className="text-center text-soft-gray text-body-paragraph">{"No reviews available for this pet sitter yet."}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[324px] flex flex-col border border-bd-gray rounded-lg sticky top-[80px] pop-up-shadow">
                <div className="pt-4 flex flex-row">
                    <div className="p-4 pl-6">
                        <Image 
                            src={userData?.avatar ? getAttachmentSrc(userData.avatar) : "/default_profile.jpg"}
                            width={286}
                            height={286}
                            alt={"pet sitter profile picture"}
                            className="w-[143px] h-[143px] border-[3px] border-bright-blue rounded-full object-cover"
                        />
                    </div>
                    <div className="flex-1 p-4 pl-0 pr-6 flex flex-col items-start">
                        <div className="w-full pb-2 flex flex-col items-start gap-1 border-b border-bd-gray">
                            <p className="h-5 text-subheading text-bright-green">{userData?.petsitter?.reviews.length}</p>
                            <p className="text-[14px] font-normal leading-[100%]">Reviews</p>
                        </div>
                        <div className="w-full py-2 flex flex-col items-start gap-1 border-b border-bd-gray">
                            <div className="flex flex-row items-end">
                                <p className="h-5 text-subheading text-golden-yellow">{(userData?.petsitter?.rating ?? 0).toFixed(1)}</p>
                                <StarIcon className="w-5 h-5 text-golden-yellow"/>
                            </div>
                            <p className="text-[14px] font-normal leading-[100%]">Rating</p>
                        </div>
                        <div className="w-full pt-2 flex flex-col items-start gap-1">
                            <p className="h-5 text-subheading text-bright-blue">{activities.length}</p>
                            <p className="text-[14px] font-normal leading-[100%]">Activities done</p>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-8 flex flex-col gap-4">
                    <h1 className="text-header text-dark-blue">{userData?.firstname + " " + userData?.lastname}</h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-body-paragraph">{userData?.petsitter?.quote}</p>
                        <p className="text-body text-medium-gray">{userData?.petsitter?.location}</p>
                    </div>
                    {
                        myData?.role == "CUSTOMER" &&
                        <div className="pt-4 flex flex-row justify-between gap-5">
                            <InviteButton />
                            <FavoriteButton isAdded={favorites.some((favorite) => favorite.petsitter.id == userData?.petsitter?.id)} onFavoriteButtonClick={onFavoriteButtonClick}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
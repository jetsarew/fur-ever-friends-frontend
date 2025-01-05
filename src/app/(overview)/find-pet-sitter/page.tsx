"use client";

import PetSitterSearchCard from "@/components/Card/PetSitterSearchCard";
import InputField from "@/components/Input/InputField";
import { userService } from "@/services/user.service";
import { FilterIcon } from "@/shared/Icon";
import { CommonUserModel } from "@/types/user.type";
import { useEffect, useState } from "react";

export default function FeedPage() {
    const [petSitters, setPetSitters] = useState<CommonUserModel[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
    const [ratingFilter, setRatingFilter] = useState<number | null>(null);
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    useEffect(() => {
        const fetchPetSitters = async () => {
            try {
                const response = await userService.getPetSitter();
                setPetSitters(response);
            } catch (error) {
                console.error("Error fetching pet sitters:", error);
            }
        };

        fetchPetSitters();
    }, []);

    const filteredPetSitters = petSitters.filter((user) => {
        const matchesSearchQuery =
            user.firstname.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
            user.lastname.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

        const matchesRatingFilter = ratingFilter !== null ? user?.petsitter!.rating >= ratingFilter : true;

        return matchesSearchQuery && matchesRatingFilter;
    });

    const handleSearch = (value: string) => {
        setSearchQuery(value);
    };

    const handleRatingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rating = parseInt(e.target.value);
        if (!isNaN(rating) && rating >= 0 && rating <= 5) {
            setRatingFilter(rating);
        } else if (e.target.value === "") {
            setRatingFilter(null);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="pt-9 pb-4 flex flex-row items-center gap-4 sticky top-[63px] border-b border-bd-gray bg-white">
                <InputField
                    type="text"
                    width="flex-1"
                    height="h-12"
                    placeholder="Search Pet Sitters"
                    onChange={handleSearch}
                />
                <div className="relative">
                    <button onClick={() => setShowFilterOptions(!showFilterOptions)}>
                        <FilterIcon />
                    </button>
                    {showFilterOptions && (
                        <div className="absolute w-64 top-8 right-0 bg-white shadow-lg border p-4 rounded-md z-10">
                            <p className="text-sm text-soft-gray mb-2">Filter by Rating</p>
                            <input
                                type="number"
                                min="0"
                                max="5"
                                value={ratingFilter ?? ""}
                                onChange={handleRatingInput}
                                className="w-full p-2 rounded-md border border-gray-300"
                                placeholder="Enter a rating (0-5)"
                            />
                            <button
                                className="block text-black py-1 px-2 mt-2 rounded-md hover:bg-gray-200"
                                onClick={() => setRatingFilter(null)}
                            >
                                Clear Filter
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="pb-9 flex flex-row items-start justify-start flex-wrap gap-8">
                {filteredPetSitters.length > 0 ? (
                    filteredPetSitters.map((petSitter, index) => (
                        <PetSitterSearchCard
                            key={index}
                            userId={petSitter.id}
                            name={petSitter.firstname + " " + petSitter.lastname}
                            rating={petSitter.petsitter?.rating}
                            avatar={petSitter.avatar}
                            taskDone={
                                petSitter.petsitter?.activities.filter((activity) => activity.state === "COMPLETED").length ?? 0
                            }
                        />
                    ))
                ) : (
                    <div>No pet sitters found matching your search criteria.</div>
                )}
            </div>
        </div>
    );
}

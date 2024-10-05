import PetSitterSearchCard from "@/components/Card/PetSitterSearchCard";

export default function FavoritePage(){
    return (
        <div className="flex flex-col gap-8">
            <h1 className="pt-9 pb-4 border-b border-bd-gray text-subheading text-dark-blue sticky top-[64px] bg-white">Favorite Pet Sitters</h1>
            <div className="flex flex-row items-start justify-start flex-wrap gap-8">
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
                <PetSitterSearchCard />
            </div>
        </div>
    );
}
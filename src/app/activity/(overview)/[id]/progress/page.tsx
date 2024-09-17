import ActivityProgressCard from "@/components/Card/ActivityProgressCard";

export default function ActivityProgressPage({ params }: {
    params: { id: string }
}
){
    console.log(params.id);
    return (
        <div className="w-[918px] mx-auto flex flex-row justify-between items-start flex-wrap gap-8">
            <ActivityProgressCard />
            <ActivityProgressCard />
            <ActivityProgressCard />
        </div>
    )
}
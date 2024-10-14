import ActivityCard from "@/components/Card/ActivityCard";

export default function InProgressActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"pet sitter"} state={"In progress"}/>
            <ActivityCard role={"pet owner"} state={"In progress"}/>
            <ActivityCard role={"pet sitter"} state={"In progress"}/>
            <ActivityCard role={"pet owner"} state={"In progress"}/>
        </div>
    );
}
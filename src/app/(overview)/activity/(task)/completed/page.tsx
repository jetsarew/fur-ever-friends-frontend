import ActivityCard from "@/components/Card/ActivityCard";

export default function CompletedActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"pet sitter"} state={"Completed"}/>
            <ActivityCard role={"pet owner"} state={"Completed"}/>
        </div>
    );
}
import ActivityCard from "@/components/Card/ActivityCard";

export default function ReturningActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"pet sitter"} state={"Returning"}/>
            <ActivityCard role={"pet owner"} state={"Returning"}/>
        </div>
    );
}
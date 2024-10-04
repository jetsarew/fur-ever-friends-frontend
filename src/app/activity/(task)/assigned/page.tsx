import ActivityCard from "@/components/Card/ActivityCard";

export default function AssignedActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"pet sitter"} state={"Assigned"}/>
            <ActivityCard role={"pet owner"} state={"Assigned"}/>
        </div>
    );
}
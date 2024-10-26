import ActivityCard from "@/components/Card/ActivityCard";

export default function CompletedActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"PETSITTER"} state={"Completed"}/>
            <ActivityCard role={"CUSTOMER"} state={"Completed"}/>
        </div>
    );
}
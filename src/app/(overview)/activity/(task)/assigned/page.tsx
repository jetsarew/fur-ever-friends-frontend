import ActivityCard from "@/components/Card/ActivityCard";

export default function AssignedActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"PETSITTER"} state={"Assigned"}/>
            <ActivityCard role={"CUSTOMER"} state={"Assigned"}/>
        </div>
    );
}
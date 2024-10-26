import ActivityCard from "@/components/Card/ActivityCard";

export default function ReturningActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"PETSITTER"} state={"Returning"}/>
            <ActivityCard role={"CUSTOMER"} state={"Returning"}/>
        </div>
    );
}
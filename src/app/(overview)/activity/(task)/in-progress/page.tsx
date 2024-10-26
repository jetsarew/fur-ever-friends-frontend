import ActivityCard from "@/components/Card/ActivityCard";

export default function InProgressActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <ActivityCard role={"PETSITTER"} state={"In progress"}/>
            <ActivityCard role={"CUSTOMER"} state={"In progress"}/>
            <ActivityCard role={"PETSITTER"} state={"In progress"}/>
            <ActivityCard role={"CUSTOMER"} state={"In progress"}/>
        </div>
    );
}
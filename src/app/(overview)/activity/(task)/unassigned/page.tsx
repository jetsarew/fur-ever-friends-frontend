import ActivityCard from "@/components/Card/ActivityCard";
import Link from "next/link";

export default function UnassignedActivitiesPage(){
    return (
        <div className="flex flex-col gap-6">
            <Link 
                href={"create"}
                className="px-6 py-4 flex flex-row justify-center items-center text-button text-white bg-bright-green rounded-lg"
            >+ Create new activity</Link>
            <ActivityCard role={"pet sitter"} state={"Unassigned"}/>
            <ActivityCard role={"pet owner"} state={"Unassigned"}/>
        </div>
    );
}
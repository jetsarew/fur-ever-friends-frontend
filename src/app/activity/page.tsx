import { redirect } from "next/navigation";

export default function ActivityPage(){
    redirect("/activity/unassigned");
    
    return null;
}
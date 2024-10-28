import { ActivityState } from "@/types/response.type";

export function getStatePriority(state: ActivityState) {
    const statePriority = {
        PENDING: 0,
        ASSIGNED: 1,
        IN_PROGRESS: 2,
        RETURNING: 3,
        COMPLETED: 4,
        REJECTED: -1,
        FAILED: -1,
        CANCELLED: -1,
    };
    return statePriority[state];
}
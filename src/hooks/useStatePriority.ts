import { ActivityState } from "@/types/response.type";
import { ServiceType } from "@/dto/activity.dto";

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

export function getServiceName(serviceType: ServiceType) {
    const serviceNames = {
        'FEEDING': "Feeding",
        'GROOMING': "Grooming",
        'EXERCISING': "Exercising",
        'TRAINING': "Training",
        'ADMINISTERING_MEDICATION': "Administering Medication",
        'RELAXATION': "Relaxation",
    }

    return serviceNames[serviceType];
}
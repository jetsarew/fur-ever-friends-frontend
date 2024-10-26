"use client";

import { petService } from "@/services/pet.service";
import { useQuery } from "react-query";
import { PetModelResponse } from "@/types/response.type";

export const usePetByOwnerId = () => {
  const PET_QUERY_KEY = "pet";

  const fetchPetsByOwnerId = async () => {
    const response = await petService.getPetsByOwner();
    return response;
  };

  const {
    data: petsQueryData,
    isLoading,
    refetch,
  } = useQuery<PetModelResponse[]>(PET_QUERY_KEY, fetchPetsByOwnerId, {
    refetchOnWindowFocus: false,
  });

  return {
    pets: petsQueryData,
    isLoading,
    refetch,
    fetchPetsByOwnerId,
  };
};

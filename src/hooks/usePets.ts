"use client";

import { petService } from "@/services/pet.service";
import { PetDto } from "@/dto/pet.dto";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPets } from "@/store/pet/pet.slice";
import { useMutation, useQuery } from "react-query";

export const usePets = () => {
  const dispatch = useAppDispatch();
  const petListStore = useAppSelector((state) => state.pet.pets);

  const fetchPetsData = async () => {
    return petService.getPetsByOwner();
  };

  const { isLoading, refetch } = useQuery("pets", fetchPetsData, {
    refetchOnWindowFocus: false,
    enabled: petListStore.length === 0,
    onSuccess: (data) => {
      dispatch(setPets(data));
    },
  });

  const createPetService = async (data: { pet: PetDto }) => {
    await petService.createPet(data.pet);
  };

  const updatePetService = async (id: string, data: { pet: PetDto }) => {
    const response = await petService.updatePet(id, data.pet);
    return response;
  };

  const createPostMutation = useMutation(
    (data: { pet: PetDto }) => createPetService(data),
    {
      onSuccess: async () => {
        await refetch();
      },
    },
  );

  const updatePetMutation = useMutation(
    (data: { petId: string | undefined; pet: PetDto }) =>
      updatePetService(data.petId as string, data),
    {
      onSuccess: async () => {
        await refetch();
      },
    },
  );

  const deletePetMutation = useMutation(petService.deletePet, {
    onSuccess: async () => {
      await refetch();
    },
  });

  const createPet = async (pet: PetDto) => {
    await createPostMutation.mutateAsync({ pet });
  };

  const updatePet = async (petId: string, pet: PetDto) => {
    await updatePetMutation.mutateAsync({ petId, pet });
  };

  const deletePet = async (petId: string) => {
    await deletePetMutation.mutateAsync(petId);
  };

  return {
    petList: petListStore,
    refetch,
    isLoading,
    createPet,
    updatePet,
    deletePet,
  };
};

import { breedNotEmptyValidator, fileNotEmptyValidator, numberNotEmptyValidator, stringNotEmptyValidator } from "@/utils/validator";
import { Gender } from "@/types/response.type";
import { AnimalType } from "@/types/breed.type";
import * as yup from "yup";

export type CreatePetValue = {
    ownerId: string;
    name: string;
    age: number;
    weight: number;
    gender: Gender;
    personality: string;
    allergy: string;
    otherDetail: string;
    animalTypeId: AnimalType;
    breedId: string;
    imageUrl: string;
    file: File | null;
};

export const emptyCreatePetValues = {
    ownerId: "",
    name: "",
    age: 1,
    weight: 1,
    gender: "MALE" as Gender,
    personality: "",
    allergy: "",
    otherDetail: "",
    animalTypeId: "3c7d4c5d-8299-44cb-81fb-83233375b952" as AnimalType,
    breedId: "",
    imageUrl: "",
    file: null,
};

export const createPetValidationSchema = yup.object({
  name: stringNotEmptyValidator,
  age: numberNotEmptyValidator,
  weight: numberNotEmptyValidator,
  personality: stringNotEmptyValidator,
  allergy: stringNotEmptyValidator,
  otherDetail: stringNotEmptyValidator,
  breedId: breedNotEmptyValidator,
  file: fileNotEmptyValidator,
});

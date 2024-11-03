import { breedNotEmptyValidator, numberNotEmptyValidator, stringNotEmptyValidator } from "@/utils/validator";
import { Gender } from "@/types/response.type";
import * as yup from "yup";

export type UpdatePetValue = {
    name: string;
    age: number;
    weight: number;
    gender: Gender;
    personality: string;
    allergy: string;
    otherDetail: string;
    animalTypeId: string;
    breedId: string;
    imageUrl: string;
    file?: File;
};

export const emptyUpdatePetValues = {
    name: "",
    age: 1,
    weight: 1,
    gender: "MALE" as Gender,
    personality: "",
    allergy: "",
    otherDetail: "",
    animalTypeId: "",
    breedId: "",
    imageUrl: ""
};
       
export const updatePetValidationSchema = yup.object({
  name: stringNotEmptyValidator,
  age: numberNotEmptyValidator,
  weight: numberNotEmptyValidator,
  personality: stringNotEmptyValidator,
  allergy: stringNotEmptyValidator,
  otherDetail: stringNotEmptyValidator,
  breedId: breedNotEmptyValidator,
});

import { PetModelResponse } from "@/types/response.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PetAppState {
  pets: PetModelResponse[];
  pet: PetModelResponse | null;
}

const initialState: PetAppState = {
  pets: [],
  pet: null,
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<PetModelResponse[]>) => {
      state.pets = action.payload;
    },
    setPet: (state, action: PayloadAction<PetModelResponse>) => {
      state.pet = action.payload;
    },
    deletePet: (state) => {
      state.pet = null;
    },
  },
});

export const { setPets, setPet, deletePet } = petSlice.actions;

import { CommonUserModel } from "@/types/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAppStore {
  user: CommonUserModel[] | null;
}

const initialState: UserAppStore = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CommonUserModel[]>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

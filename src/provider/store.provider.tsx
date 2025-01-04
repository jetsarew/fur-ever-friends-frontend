"use client";

import { setAuthUser } from "@/store/auth/auth.slice";
import { persistor, store } from "@/store/store";
import { CommonUserModel } from "@/types/user.type";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface StoreProviderProps {
  children: React.ReactNode;
  initialUser?: CommonUserModel;
}
export default function StoreProvider({ children, initialUser }: StoreProviderProps) {
  store.dispatch({ type: setAuthUser.type, payload: initialUser });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}

'use client';
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./authSlice";
import { type } from "os";

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });

export const store = makeStore();
export type RootState=ReturnType<typeof store.getState>
export type AddDispatch=typeof store.dispatch

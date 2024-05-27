import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme";
import modalReducer from "@/lib/features/modal";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      modal: modalReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

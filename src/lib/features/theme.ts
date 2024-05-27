import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  mode: string;
}

enum Mode {
  Dark = "dark",
  Light = "light",
}

const initialState: ThemeState = {
  mode: Mode.Light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
        state.mode = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;

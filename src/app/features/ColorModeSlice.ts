import { createSlice } from "@reduxjs/toolkit";

type ColorMode = "light" | "dark";

interface ColorModeState {
  colorMode: ColorMode;
}
const initialState: ColorModeState = {
  colorMode: "light",
};

const ColorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      const prevMode = state.colorMode;
      state.colorMode = prevMode === "light" ? "dark" : "light";
    },
  },
});
export const { toggleColorMode } = ColorModeSlice.actions;
export default ColorModeSlice.reducer;

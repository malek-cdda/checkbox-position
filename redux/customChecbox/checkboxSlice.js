import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkBoxData: [],
};

const checkboxSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCheckboxData: (state, { payload }) => {
      if (/\b(multiple)\b/.test(payload.selectType)) {
        state.checkBoxData = [...state.checkBoxData, payload];
      } else if (
        state?.checkBoxData?.some((item) => /\b(radio)\b/.test(item.type))
      ) {
        if (/\b(radio)\b/.test(payload.type)) {
          state.checkBoxData = state?.checkBoxData?.map((item) => {
            return item.type == payload.type ? payload : item;
          });
        } else {
          state.checkBoxData = [...state.checkBoxData, payload];
        }
      } else {
        state.checkBoxData = [...state.checkBoxData, payload];
      }
    },
    removeDouble: (state, action) => {
      state.checkBoxData = action.payload;
    },
  },
});
export const { setCheckboxData, removeDouble } = checkboxSlice.actions;
export default checkboxSlice.reducer;

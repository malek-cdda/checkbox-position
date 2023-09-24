import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkBoxData: [],
};

const checkboxSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCheckboxData: (state, { payload }) => {
      const isMultiple = /\b(multiple)\b/.test(payload.selectType);
      const isRadio = /\b(radio)\b/.test(payload.type);
      if (
        isMultiple ||
        !isRadio ||
        !state.checkBoxData.some(
          (item) => isRadio && item.type === payload.type
        )
      ) {
        state.checkBoxData = [...state.checkBoxData, payload];
      } else {
        state.checkBoxData = state.checkBoxData.map((item) =>
          item.type === payload.type ? payload : item
        );
      }
    },
    removeDouble: (state, action) => {
      state.checkBoxData = action.payload;
    },
  },
});
export const { setCheckboxData, removeDouble } = checkboxSlice.actions;
export default checkboxSlice.reducer;

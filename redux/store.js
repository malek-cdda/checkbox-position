import checkboxSlice from "./customChecbox/checkboxSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    checkBoxData: checkboxSlice,
  },
});
export default store;

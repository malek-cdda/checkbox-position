import {
  removeDouble,
  setCheckboxData,
} from "@/redux/customChecbox/checkboxSlice";
import store from "@/redux/store";

export const typeDataCheck = (data) => {
  const checkItemData = store.getState()?.checkBoxData?.checkBoxData;
  checkItemData.some((item) => item?.name === data?.name)
    ? store.dispatch(
        // checkbox or radio button active or not active condition here
        removeDouble(checkItemData.filter((item) => item?.name !== data?.name))
      )
    : store.dispatch(setCheckboxData(data));
};

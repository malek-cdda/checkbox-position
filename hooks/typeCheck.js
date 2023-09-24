import {
  removeDouble,
  setCheckboxData,
} from "@/redux/customChecbox/checkboxSlice";
import store from "@/redux/store";

export const typeDataCheck = (data) => {
  const datas = store.getState().checkBoxData.checkBoxData;
  console.log(data);
  if (datas.some((item) => item.name === data.name)) {
    let filterData = datas.filter((item) => item.name !== data.name);
    console.log(filterData);
    store.dispatch(removeDouble(filterData));
    // console.log(filterData);
  } else {
    store.dispatch(setCheckboxData(data));
  }
  //   store.dispatch(setCheckboxData(data));
};

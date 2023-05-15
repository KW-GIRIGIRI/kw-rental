import { configureStore } from "@reduxjs/toolkit";
import authReceiveReducer from "./reducer/authReceiveSlice";
import modifyEquipReducer from "./reducer/modifyEquipSlice"
import datePickerReducer from "./reducer/datePickerSlice"

const store = configureStore({
  reducer: {
    authReceive: authReceiveReducer,
    modifyEquip: modifyEquipReducer,
    datePicker: datePickerReducer,
  },
});

export default store;

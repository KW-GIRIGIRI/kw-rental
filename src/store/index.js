import { configureStore } from "@reduxjs/toolkit";
import authReceiveReducer from "./reducer/authReceiveSlice";
import modifyEquipReducer from "./reducer/modifyEquipSlice";
import datePickerReducer from "./reducer/datePickerSlice";
import cartListReducer from "./reducer/cartListSlice";
import labControlReducer from "./reducer/LabControllerSlice";

const store = configureStore({
  reducer: {
    cartList: cartListReducer,
    authReceive: authReceiveReducer,
    modifyEquip: modifyEquipReducer,
    datePicker: datePickerReducer,
    labControl: labControlReducer,
  },
});

export default store;

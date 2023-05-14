import { configureStore } from "@reduxjs/toolkit";
import authReceiveReducer from "./reducer/authReceiveSlice";
import modifyEquipReducer from "./reducer/modifyEquipSlice"

const store = configureStore({
  reducer: {
    authReceive: authReceiveReducer,
    modifyEquip: modifyEquipReducer,
  },
});

export default store;

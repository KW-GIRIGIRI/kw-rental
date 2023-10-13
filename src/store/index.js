import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PERSIST,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import authReceiveReducer from "./reducer/authReceiveSlice";
import modifyEquipReducer from "./reducer/modifyEquipSlice";
import datePickerReducer from "./reducer/datePickerSlice";
import cartListReducer from "./reducer/cartListSlice";
import labControlReducer from "./reducer/LabControllerSlice";
import operationDayReducer from "./reducer/operationDaySlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["modifyEquip", "labControl"],
};

const rootReducer = combineReducers({
  cartList: cartListReducer,
  authReceive: authReceiveReducer,
  modifyEquip: modifyEquipReducer,
  datePicker: datePickerReducer,
  labControl: labControlReducer,
  operationDay: operationDayReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

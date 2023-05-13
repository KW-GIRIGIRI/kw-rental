import { configureStore } from "@reduxjs/toolkit";
import authReceiveReducer from "./reducer/authReceiveSlice";

const store = configureStore({
  reducer: {
    authReceive: authReceiveReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReceiveReducer from "./reducer/authReceive";

const store = configureStore({
  reducer: {
    authReceive: authReceiveReducer,
  },
});

export default store;

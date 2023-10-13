import { createSlice } from "@reduxjs/toolkit";
import { dayArr } from "../../data/weekDay";

const initialState = {
  operationDayArr: [],
};

const operationDaySlice = createSlice({
  name: "operationDay",
  initialState,
  reducers: {
    setOperationDay: (state, action) => {
      state.operationDayArr = action.payload
        .map((val) => dayArr.findIndex((day) => day.value === val) + 1)
        .sort((a, b) => a - b);
    },
  },
});

export const { setOperationDay } = operationDaySlice.actions;

export default operationDaySlice.reducer;

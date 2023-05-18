import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  lab: true,
  date: dayjs().format("YYYY-MM-DD"),
};

const labControlSlice = createSlice({
  name: "labControl",
  initialState,
  reducers: {
    setLab: (state, action) => {
      state.lab = action.payload;
    },
    setLabDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setLab, setLabDate } = labControlSlice.actions;

export default labControlSlice.reducer;

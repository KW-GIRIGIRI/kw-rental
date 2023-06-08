import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lab: true,
  date: "",
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

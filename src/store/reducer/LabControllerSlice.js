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
    preventLabEvent: (state) => {
      state.lab = !state.lab;
    },
  },
});

export const { setLab, setLabDate, preventLabEvent } = labControlSlice.actions;

export default labControlSlice.reducer;

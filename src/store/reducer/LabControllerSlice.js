import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lab: true,
};

const labControlSlice = createSlice({
  name: "labControl",
  initialState,
  reducers: {
    setLab: (state, action) => {
      state.lab = action.payload;
    },
  },
});

export const { setLab } = labControlSlice.actions;

export default labControlSlice.reducer;

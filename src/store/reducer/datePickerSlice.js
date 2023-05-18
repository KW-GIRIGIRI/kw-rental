import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singularDate: "",
  dualDate: {
    firstDate: "",
    lastDate: "",
  },
  modifyEquipAmount: "",
};

const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    setSingularDate: (state, action) => {
      state.singularDate = action.payload;
    },
    setDualFirstDate: (state, action) => {
      state.dualDate.firstDate = action.payload;
    },
    setDuaLastDate: (state, action) => {
      state.dualDate.lastDate = action.payload;
    },
    setModifyEquipAmount: (state, action) => {
      state.modifyEquipAmount = action.payload;
    },
  },
});

export const {
  setSingularDate,
  setDualFirstDate,
  setDuaLastDate,
  setModifyEquipAmount,
} = datePickerSlice.actions;

export default datePickerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singularDate: "",
  dualDate: {
    firstDate: "",
    lastDate: "",
  },
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
    // resetDate: () => {
    //   return {
    //     singularDate: "",
    //     dualDate: {
    //       firstDate: {
    //         visible: false,
    //         top: 0,
    //         left: 0,
    //         date: dayjs().toISOString(),
    //       },
    //       particularDate: "",
    //       secondDate: {
    //         visible: false,
    //         top: 0,
    //         left: 0,
    //         date: dayjs().add(1, "days").toISOString(),
    //       },
    //     },
    //   };
    // },
  },
});

export const { setSingularDate, setDualFirstDate, setDuaLastDate } =
  datePickerSlice.actions;

export default datePickerSlice.reducer;

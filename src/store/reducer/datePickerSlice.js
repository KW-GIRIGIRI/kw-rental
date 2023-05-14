import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  singularDate: '',
  dualDate: {
    firstDate: {
      visible: false,
      top: 0,
      left: 0,
      date: dayjs().toISOString(),
    },
    particularDate: "",
    secondDate: {
      visible: false,
      top: 0,
      left: 0,
      date: dayjs().add(1, "days").toISOString(),
    },
  },
};

const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    setSingularDate: (state, action) => {
      state.singularDate = action.payload
    }, 
    resetDate: () => {
      return {
        singularDate: '',
        dualDate: {
          firstDate: {
            visible: false,
            top: 0,
            left: 0,
            date: dayjs().toISOString(),
          },
          particularDate: "",
          secondDate: {
            visible: false,
            top: 0,
            left: 0,
            date: dayjs().add(1, "days").toISOString(),
          },
        },
      };
    }
  },
});

export const { setSingularDate, resetDate } = datePickerSlice.actions;

export default datePickerSlice.reducer;

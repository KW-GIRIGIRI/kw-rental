import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equip: {},
  itemList: [],
};

const modifyEquipSlice = createSlice({
  name: "modifyEquip",
  initialState,
  reducers: {
    setEquip: (state, action) => {
      state.equip = action.payload;
    },
    setItemList: (state, action) => {
      state.itemList = action.payload;
    },
    resetEquip: (state) => {
      state.equip = {};
      state.itemList = [];
    },
  },
});

export const { setEquip, setItemList, resetEquip } = modifyEquipSlice.actions;

export default modifyEquipSlice.reducer;

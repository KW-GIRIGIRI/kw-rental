import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartEquip } from "../../api/api";

export const asyncGetCartList = createAsyncThunk(
  "cartList/asyncGetCartList",
  async () => {
    const response = await getCartEquip();
    return response;
  }
);

const initialState = {
  cartList: [],
};

const cartListSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetCartList.fulfilled, (state, action) => {
      state.cartList = action.payload;
    });
  },
});

export const {} = cartListSlice.actions;

export default cartListSlice.reducer;

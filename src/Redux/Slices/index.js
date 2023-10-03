import { createSlice } from '@reduxjs/toolkit'
import ProductData from "../Slices/ProductData"


  const initialState = {
    cart: [],
    items: ProductData,
    totalQuantity: 0,
    totalPrice: 0,
  };


export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }}

  },
})

export const { addToCart} = counterSlice.actions

export default counterSlice.reducer
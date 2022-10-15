import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  'price': 3.00
}


export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    incrementPrice: (state, action) => {
      state.price += Number(action.payload)
    },
    decrementPrice: (state, action) => {
      state.price -= Number(action.payload)
    },
    resetPrice : () => initialState
  },
});

export const { incrementPrice, decrementPrice, resetPrice } = priceSlice.actions;

export default priceSlice.reducer;

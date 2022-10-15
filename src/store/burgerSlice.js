import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  'lettuce': 0,
  'bacon': 0,
  'cheese': 0,
  'meat': 0
}


export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    increment: (state, action) => {
      state[action.payload] += 1
    },
    decrement: (state, action) => {
      state[action.payload] -= 1
    },
    reset : () => initialState
  },
});

export const { increment, decrement, reset } = burgerSlice.actions;

export default burgerSlice.reducer;

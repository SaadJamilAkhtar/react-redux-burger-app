import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './burgerSlice'
import priceReducer from './priceSlice'
import orderReducer from './orderSlice'

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
    price: priceReducer,
    orders: orderReducer
  },
});

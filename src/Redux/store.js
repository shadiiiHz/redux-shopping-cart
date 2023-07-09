import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'


export default configureStore({
  reducer: {
    cartRed : cartSlice
    
  },
})
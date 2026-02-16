import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../products/productSlice'
import singleSlice from '../products/SingleProduct'
import authSlice from '../auth/authSlice'
import cartSlice from '../cart/cartSlice'

const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
        users:authSlice,
        carts:cartSlice
    }
})

export default store
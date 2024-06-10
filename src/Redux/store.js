import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./poductslice";

export const store=configureStore({

reducer:{
    product:productSlice.reducer
}

})
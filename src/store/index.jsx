import { configureStore } from "@reduxjs/toolkit";
import acount from './modules/acountSlice'


export const store = configureStore({
    reducer: {
        acount,
    }
})
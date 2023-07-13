import { configureStore } from "@reduxjs/toolkit";
import acount from './modules/acountSlice'
import board from './modules/boardSlice'


export const store = configureStore({
    reducer: {
        acount,
        board,
    }
})
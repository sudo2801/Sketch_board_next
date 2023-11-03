import { configureStore } from "@reduxjs/toolkit";
import Menu from "@/slice/menuSlice"
export const store = configureStore({
    reducer:{
        Menu,
    }
})
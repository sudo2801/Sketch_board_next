import { configureStore } from "@reduxjs/toolkit";
import Menu from "@/slice/menuSlice";
import ToolboxReducer from "@/slice/toolboxSlice"
export const store = configureStore({
    reducer:{
        Menu,
        Toolbox:ToolboxReducer
    }
})
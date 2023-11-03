import { MENU_ITEMS } from '@/constants'
import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    activeMenuItem: MENU_ITEMS.PENCIL,
    actionMenuItem:null
}
export const menuSlice =createSlice({
    name:"menu",
    initialState,
    reducers:{
        menuItemClick:(state,action) =>{
          state.activeMenuItem = action.payload
        },
        actionItemMenu:(state,action) =>{
            state.actionMenuItem = action.payload
          }
    }
})

export const { menuItemClick ,actionItemMenu} = menuSlice.actions;
export default menuSlice.reducer;
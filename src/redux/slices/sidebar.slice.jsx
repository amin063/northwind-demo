import { createSlice } from "@reduxjs/toolkit";

const isOpenMenu = createSlice({
    name: 'menu',
    initialState: false,
    reducers: {
        showMenu: (state, action) => {
            console.log(action.payload + "slice");

            return action.payload;
        }
    }
})


export const { showMenu } = isOpenMenu.actions

export default isOpenMenu.reducer
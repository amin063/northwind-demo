import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
    name: "saved",
    initialState: [],
    reducers: {
        addList: (state, action) => {
            const itemIndex = state.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.splice(itemIndex, 1)
            } else {
                state.push(action.payload)
            }
        }
    }
})

export const { addList } = savedSlice.actions;
export default savedSlice.reducer
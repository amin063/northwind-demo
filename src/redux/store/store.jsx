import { configureStore } from "@reduxjs/toolkit";
import savedReducer from '../slices/saved.slice'
import sidebarReducer from '../slices/sidebar.slice'
const globalState = configureStore({
    reducer:{
        savedList: savedReducer,
        sidebar: sidebarReducer
    }
})


export default globalState
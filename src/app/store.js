import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Featers/userSlice";
export default configureStore({
    reducer:{ 
        user: userReducer,
    },
});
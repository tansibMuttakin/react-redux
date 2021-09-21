import { configureStore } from "@reduxjs/toolkit";
import counterSliece from "./counter";
import authSlice from "./auth";

const store = configureStore({
    reducer:{
        counter:counterSliece.reducer,
        auth:authSlice.reducer
    }
});

export default store;
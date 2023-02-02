import { configureStore} from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
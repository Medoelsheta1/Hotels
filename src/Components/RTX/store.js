import { configureStore } from "@reduxjs/toolkit";
import fvHotels from './slices/FvHotels'
export const store = configureStore({
    reducer: {
        'fvHotels': fvHotels
    }
})
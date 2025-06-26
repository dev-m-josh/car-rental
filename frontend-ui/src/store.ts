import { configureStore } from "@reduxjs/toolkit";

// Import individual reducers for different parts of the state
import authReducer from "./features/authSlice"; // Handles authentication state
import carReducer from "./features/carSlice";   // Handles cars state

// Create and export the Redux store
export const store = configureStore({
    // Define all slices (reducers) that make up the global Redux state
    reducer: {
        auth: authReducer, // auth slice handles login, register, user info, etc.
        cars: carReducer,  // cars slice handles car list, loading, error, etc.
    },
});
// Define types for the entire Redux state and the dispatch function
export type RootState = ReturnType<typeof store.getState>; // Type for the entire state
export type AppDispatch = typeof store.dispatch; // Type for the dispatch function
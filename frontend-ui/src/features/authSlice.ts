import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    token: string;
    isAdmin: boolean;
}


interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.token);
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	name: string;
	wallet: string;
	survey: string[];
}

const initialUser: AuthState = {
	name: "",
	wallet: "",
	survey: [],
};

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: initialUser,
	},
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
	},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

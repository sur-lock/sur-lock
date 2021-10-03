import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	id: number;
	name: string;
}

const initialUser: AuthState = {
	id: 0,
	name: "",
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

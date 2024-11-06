import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	username:
		localStorage.getItem("ld_username") !== null
			? JSON.parse(localStorage.getItem("ld_username"))
			: "Stranger",
};

export const usernameSlice = createSlice({
	name: "username",
	initialState,
	reducers: {
		updateUsername: (state, action) => {
			state.username = action.payload;

			localStorage.setItem("ld_username", JSON.stringify(state.username));
		},
	},
});

export const { updateUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
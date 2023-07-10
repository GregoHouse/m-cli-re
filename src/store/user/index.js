import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
	name: 'user',
	initialState: {
		isLogged: false,
		userInfo: null,
	},
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		setLogged(state, action) {
			state.isLogged = action.payload;
		},
	},
});

export const userActions = userReducer.actions;

export default userReducer.reducer;

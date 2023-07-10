import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
	name: 'user',
	initialState: {
		isLogged: false,
		token: null,
		userInfo: null,
	},
	reducers: {
		setUserSession(state, { payload }) {
			state.isLogged = payload.isLogged;
			state.userInfo = payload.userInfo;
			state.token = payload.token;
		},
	},
});

export const userActions = userReducer.actions;

export default userReducer.reducer;

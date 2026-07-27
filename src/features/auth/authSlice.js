import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));

const initialState = {
  currentUser: savedUser || null,
  isLoggedIn: !!savedUser,
};
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isAuth: false,
    username: "",
    email: "",
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    setAuth: (state, action) => {
      state.value.isAuth = true;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
    },
  },
});

export const { logIn, logOut, setAuth, toggleModerator } = auth.actions;
export default auth.reducer;

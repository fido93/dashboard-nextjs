import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  usersList: [],
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setUsersList: (state, action) => {
      const filteredUsers = action.payload.data.filter(
        (user) =>
          user.first_name.startsWith("G") || user.last_name.startsWith("W")
      );

      state.usersList = filteredUsers;

      // Save per_page and total to the state
      if (action.payload.per_page) {
        state.per_page = action.payload.per_page;
      }

      if (action.payload.total) {
        state.total = action.payload.total;
      }
    },
  },
});

export const { setUsersList } = searchSlice.actions;
export default searchSlice.reducer;

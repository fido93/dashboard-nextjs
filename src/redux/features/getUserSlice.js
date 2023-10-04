import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  usersList: [],
  error: "",
  showEmails: {},
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
    toggleEmail: (state, action) => {
      const id = action.payload;
      state.showEmails[id] = !state.showEmails[id];
    },
  },
});

export const { setUsersList, toggleEmail } = searchSlice.actions;
export const selectShowEmails = (state) => state.search.showEmails;
export default searchSlice.reducer;

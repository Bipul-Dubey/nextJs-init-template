import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo, fetchTodoById } from "../api/app";

const initialState = {
  sidebar: {
    open: false,
  },
  // for APIs
  isLoading: false,
  data: null,
  error: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, _) {
      state.sidebar.open = !state.sidebar.open;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTodo.rejected, (state, _) => {
      state.error = true;
      state.data = null;
      state.isLoading = false;
    });

    // get based on id
    builder.addCase(fetchTodoById.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodoById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTodoById.rejected, (state, _) => {
      state.error = true;
      state.data = null;
      state.isLoading = false;
    });
  },
});

export default appSlice.reducer;

export const { toggleSidebar } = appSlice.actions;

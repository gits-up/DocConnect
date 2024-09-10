import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("loadUserSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
    })
    .addCase("loadUserFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("loadUserRequest", (state, action) => {
      state.loading = false;
    });
});

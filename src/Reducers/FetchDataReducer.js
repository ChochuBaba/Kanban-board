//RECIEVES IF THE ACTION HAS BEEN EXECUTED SUCCESFULLY OR NOT AND THEN UPDATES THE STATE ACCORDINGLY WHICH IS INITIALLY AN EMPTY OBJECT

import { createReducer } from "@reduxjs/toolkit";

export const FetchDataReducer = createReducer({}, (builder) => {
  builder
    .addCase('FETCH_OK', (state, action) => {
      state.loading = false;
      state.Tickets = action.payload.tickets;
      state.Users = action.payload.users;
    })
    .addCase('FETCH_FAIL', (state) => {
      state.loading = false;
      state.Tickets = [];
      state.Users = [];
    });
});

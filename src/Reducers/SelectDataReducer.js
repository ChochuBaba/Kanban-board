//REDUCER IN ORDER TO CHECK IF THE MANIPULATION HAS BEEN DONE PROPERLY OR NOT AND THEN UPDATE THE FINAL DATA AND ICON ACCORDINGLY

import { createReducer } from "@reduxjs/toolkit";

export const SelectDataReducer = createReducer({}, (builder) => {
  builder
    .addCase('OPERATION_OK', (state, action) => {
      state.loading = false;
      state.finalData = action.payload.finalData;
      state.icon = action.payload.icon;
    })
    .addCase('OPERATION_FAIL', (state, action) => {
      state.loading = false;
      state.finalData = [];
      state.message = action.payload.message;
    });
});

//yaha par jo initial mein hai woh hai FINALDATA ICON
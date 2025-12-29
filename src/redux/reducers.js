import { createAction, createReducer } from "@reduxjs/toolkit";

// const increment = createAction("counter/increment");
// const decrement = createAction("counter/decrement");
// const incrementByAmount = createAction("counter/incrementByAmount");

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactReducer = createReducer(initialState, (builder) => {
  console.log(builder);
});

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const contactSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export default contactSlice.reducer;
export const { setFilterContacts } = contactSlice.actions;

//////// selectors/////////
export const selectFilters = (state) => state.filters.name;

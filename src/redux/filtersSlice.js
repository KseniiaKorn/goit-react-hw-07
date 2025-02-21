import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.query;

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        query: "",
    },
    reducers: {
        changeFilter: (state, action) => {
            state.query = action.payload;
        },
    },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
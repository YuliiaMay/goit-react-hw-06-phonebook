import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {state = action.payload},
    }
});

// Генератори екшенів
const { setFilter } = filterSlice.actions;
// Редюсер слайсу
const filterReducer = filterSlice.reducer;
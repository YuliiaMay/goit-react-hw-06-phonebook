import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
    filter: '',
};


const filterSlice = createSlice({
    name: "filter",
    initialState: initialFilterState,
    reducers: {
        setFilter: {
            reducer(state, { payload }) {
                state.filter = payload;
            },
        }
    }
});

// Генератори екшенів
export const { setFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
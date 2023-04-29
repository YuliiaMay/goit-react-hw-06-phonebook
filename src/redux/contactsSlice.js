import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        createContact(state, action) {state.push(action.payload)},
        removeContact(state, action) {state.filter(contact => contact.id !== action.payload)}
    }
});

// Генератори екшенів
const { createContact, removeContact } = tasksSlice.actions;
// Редюсер слайсу
const contactsReducer = contactsSlice.reducer;
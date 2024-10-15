import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {},
    deleteContact: {},
  },
});

export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

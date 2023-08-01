import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const isDuplicate = state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (isDuplicate) {
        alert('This contact already exists in the phone book!!');
        return;
      }
      state.contacts.push({
        id: nanoid(),
        name,
        number,
      });
    },
    removeContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, updateFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;

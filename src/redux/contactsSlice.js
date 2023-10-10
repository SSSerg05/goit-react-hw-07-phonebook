import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact, toggleCompleted } from "./operations";

// data
//import initialContacts from "../data/contactsInitial.json";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsInitialState = { 
  items: [],  //initialContacts ?? [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },

    //   prepare({name, number}) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name, 
    //         number,
    //         selected: false,
    //       },
    //     };
    //   },
    // },

    // deleteContact(state, action) {
    //   const index = state.items.findIndex(contact => contact.id === action.payload);
    //   state.items.splice(index, 1);
    // },

    // toggleCompleted(state, action) {
    //   for (const contact of state.items) {
    //     if (contact.id === action.payload) {
    //       contact.selected = !contact.selected;
    //       break;
    //     }
    //   }
  },
  extraReducers: (builder) => 
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleCompleted.rejected, handleRejected)
      .addDefaultCase((state, action) => {})
});

export const contactsReducer = contactsSlice.reducer;

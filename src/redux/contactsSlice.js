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
    // },

    extraReducers: {
      [fetchContacts.pending]: handlePending,
      [fetchContacts.fulfilled](state, action) {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchContacts.rejected]: handleRejected,

      [addContact.pending]: handlePending,
      [addContact.fulfilled](state, action) {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      },
      [addContact.rejected]: handleRejected,

      [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled](state, action) {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      },
      [deleteContact.rejected]: handleRejected,

      [toggleCompleted.pending]: handlePending,
      [toggleCompleted.fulfilled](state, action) {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      },
      [toggleCompleted.rejected]: handleRejected,
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

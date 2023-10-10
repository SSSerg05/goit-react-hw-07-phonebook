import { createSlice, nanoid } from "@reduxjs/toolkit";

// data
import initialContacts from "../data/contactsInitial.json";

const contactsInitialState = { 
  items: initialContacts ?? [],
  loading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },

      prepare({name, number}) {
        return {
          payload: {
            id: nanoid(),
            name, 
            number,
            selected: false,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },

    toggleCompleted(state, action) {
      for (const contact of state.items) {
        if (contact.id === action.payload) {
          contact.selected = !contact.selected;
          break;
        }
      }
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { addContact, deleteContact, toggleCompleted, setLoading, setError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

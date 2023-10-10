import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// https://mockapi.io
// https://6525265667cfb1e59ce6bb61.mockapi.io/:endpoint
axios.defaults.baseURL = "https://6525265667cfb1e59ce6bb61.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    const {name, number, selected=false} = contact;
    try {
      const response = await axios.post("/contacts", { name, number, selected });
      return response.data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "contacts/toggleCompleted",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${contact.id}`, {
        selected: !contact.selected,
      });
      return response.data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
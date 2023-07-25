import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://64ba39405e0670a501d5d38b.mockapi.io/contacts/contacts-list';


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    return await response.json();
  } catch (error) {
    console.error('There has been an error:', error);
    throw error;
  }
});

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'content-type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return await response.json();
    } catch (error) {
      console.error('There has been an error:', error);
      rejectWithValue(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${contactId}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return contactId;
    } catch (error) {
      console.error('There has been an error:', error);
      rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  initialItems: [], 
  isLoading: false,
  error: null,
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContactAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContactAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContactAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContactAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(setFilter, (state, action) => {
        state.filter = action.payload.toLowerCase();
      });
  },
});

export const {  setFilter } = contactSlice.actions;
export default contactSlice.reducer;
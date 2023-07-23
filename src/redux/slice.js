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
  reducers: {
    addContact: (state, action) => {
      console.log('added contact');
      state.items.push(action.payload);
      state.initialItems.push(action.payload);
      console.log('Updated state after adding:', state);
    },
    deleteContact: (state, action) => {
      console.log('deleted contact');
      state.items = state.items.filter((contact) => contact.id !== action.payload);
      console.log('Updated state after deleting:', state);
    },
    // deleteContact: (state, action) => {
    //   console.log('deleted contact');
    //   state.items = state.items.filter((contact) => contact.id !== action.payload.id);
    //   state.initialItems = state.initialItems.filter((contact) => contact.id !== action.payload.id);
    // },
    
    
    setFilter: (state, action) => {
      state.filter = action.payload;
    
      if (action.payload === '') {
        state.items = state.initialItems.slice();
      } else {
        state.items = state.initialItems.filter((contact) => {
          const nameMatch = contact.name.toLowerCase().includes(action.payload.toLowerCase());
          const number = contact.number || "";
          const numberMatch = number.includes(action.payload.toLowerCase());
    
          return nameMatch || numberMatch;
        });
      }
      console.log('Updated state after filtering:', state);
    },
       
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.initialItems = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addContact, setFilter, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = 'https://64ba39405e0670a501d5d38b.mockapi.io/contacts/contacts-list';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   try {
//     const response = await fetch(BASE_URL, {
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok.');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('There has been an error:', error);
//     throw error;
//   }
// });

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, action) => {
//       console.log('added contact');
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       console.log('deleted contact');
//       state.items = state.items.filter((contact) => contact.id !== action.payload);
//     },
//     setFilter: (state, action) => {
//       console.log('this is setfilter');
//       state.filter = action.payload;

//       // Add the filter logic here
//       state.items = state.items.filter((contact) =>
//         contact.name.toLowerCase().includes(action.payload.toLowerCase())
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addContact, setFilter, deleteContact } = contactSlice.actions;

// export default contactSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://64ba39405e0670a501d5d38b.mockapi.io/contacts/contacts-list';

// Define the initial state
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

// Create an async thunk for fetching contacts
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

// Create a slice of the Redux store
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log('added contact');
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      console.log('deleted contact');
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      console.log('this is setfilter');
      state.filter = action.payload;

      // Add the filter logic here
      state.items = state.items.filter((contact) =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
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
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk, actions, and reducer
export const { addContact, setFilter, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;


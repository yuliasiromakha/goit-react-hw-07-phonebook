import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: ''
}

const contactSlice = createSlice({
  initialState, 
  reducers: {
    'fetchContactRequest': (state, action) => {
      state.status = 'pending'
    },
    'fetchContactSuccess': (state, action) => {
      state.status = 'success'
    },
    'fetchContactError': (state, action) => {
      state.status = 'error'
    },
  }
})

export default contactSlice;


//   reducers: {
//     addContact: (state, action) => {
//       console.log('added contact');
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       console.log('deleted contact');
//       state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
//     },
//     setFilter: (state, action) => {
//         console.log('this is setfilter');
//       state.filter = action.payload;
//     },
//     setContacts: (state, action) => {
//       state.contacts = action.payload;
//     },
//   },
// });

// export const { addContact, setFilter, deleteContact, setContacts } = contactSlice.actions;

// export default contactSlice.reducer;

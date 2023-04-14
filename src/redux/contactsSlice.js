import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
    name: 'phonebook',
    initialState: {contacts: [], filter: ""},
    reducers:{
        addContact: (state, action)=>{
            state.contacts.push(action.payload)
        },
        deleteContacts: (state, action)=> {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        updateFilter: (state, action) => {
            state.filter = action.payload
        }

    }
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter']
  };
  
 export  const phonebookReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const {addContact, deleteContacts, updateFilter } = contactsSlice.actions;

// Selectors 
export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;


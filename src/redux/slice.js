import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
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
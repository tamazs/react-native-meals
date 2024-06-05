import { createSlice } from "@reduxjs/toolkit";

// Reducers are functions to change our state

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => { 
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => { 
            state.ids.splice(state.ids.indexOf(action.payload.id))
        },
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
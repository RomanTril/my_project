import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    background: '#151419',
    color: 'yellow',
};

const setTheme = createSlice({
    name: 'setTheme',
    initialState,
    reducers: {
        light: (state, action) => {
            state.background = 'yellow'
            state.color = '#151419'
        },
        dark: (state, action) => {
            state.background = '#151419'
            state.color = 'yellow'
        }
    }
});

const {reducer: themeReducer, actions: {light, dark}} = setTheme;

const themeAction = {
    light,
    dark
};

export {themeAction, themeReducer};
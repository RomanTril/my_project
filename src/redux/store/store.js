import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genresReducer,moviesDBReducer,themeReducer} from "../slice";

const rootReducer = combineReducers({
    genresReducer,
    moviesDBReducer,
    themeReducer
});
const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};
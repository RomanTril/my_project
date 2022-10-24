import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../../services";

const initialState = {
    genres: [],
    genre: null,
    loading: false,
    error: null,
}

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenre()
            return data.genres
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const genresSlice = createSlice({
        name: 'genresSlice',
        initialState,
        reducers: {
            getGenre: (state, action) => {
                state.genre = action.payload
            }
        },

        extraReducers: builder =>
            builder
                .addCase(getGenres.fulfilled, (state, action) => {
                    state.genres = action.payload
                    state.loading = false
                 })
                .addCase(getGenres.pending, (state, action) => {
                    state.loading=true
                })
                .addCase(getGenres.rejected, (state, action) => {
                    state.error = action.payload
                    state.loading=false
                })
    }
)
const {reducer: genresReducer, actions: {getGenre}} = genresSlice;

const genresAction = {
    getGenres,
    getGenre
};
export {genresReducer,genresAction};
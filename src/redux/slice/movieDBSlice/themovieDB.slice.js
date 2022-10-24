import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieDBService} from "../../../services";

const initialState = {
    page: 1,
    movies: [],
    loading: false,
    error: null,
    searchFilm: '',

};

const getMovies = createAsyncThunk(
    'moviesDBSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieDBService.choosePage(page)
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getWithGenres = createAsyncThunk(
    'moviesSlice/getWithGenres',
        async ({page,genre}, {rejectWithValue}) => {
            try {
                if(genre) {
                    const {data} = await movieDBService.getWithGenres(page,genre)
                    return data.results
                }
            } catch (e) {
                return rejectWithValue(e.response.data)
            }

        }
)


const getSearchWithFilms = createAsyncThunk(
    'moviesSlice/getSearchWithFilms',
        async ({page, searchParam}, {rejectWithValue}) => {
            try {
                const {data} = await movieDBService.getWithSearchFilms(page, searchParam)
                return data.results
            } catch (e) {
                return rejectWithValue(e.response.data)
            }
        }
)

const moviesDBSlice = createSlice({
    name: 'moviesDBSlice',
    initialState,
    reducers: {
        prev: (state, action) => {
            state.page -= 1
        },
        next: (state, action) => {
            state.page += 1
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        filterMovies: (state, action) => {
            state.searchFilm = action.payload
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getMovies.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
             })
            .addCase(getSearchWithFilms.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading=false
            })
            .addCase(getSearchWithFilms.pending,(state, action)=>{
                state.loading=true
            })
            .addCase(getSearchWithFilms.rejected,(state, action)=>{
                state.error=action.payload
                state.loading=false
            })
            .addCase(getWithGenres.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getWithGenres.pending, (state,action) => {
                state.loading = true
            })
            .addCase(getWithGenres.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

});

const {reducer: moviesDBReducer, actions: {next, prev, setPage, filterMovies}} = moviesDBSlice;

const moviesDBActions = {
    next,
    prev,
    getMovies,
    setPage,
    filterMovies,
    getSearchWithFilms,
    getWithGenres,

};
export {moviesDBActions, moviesDBReducer};
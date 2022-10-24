import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Movie} from "../MovieListCard/MovieListCard";
import "./MovieList.css";
import {Pagination} from "../Pagination/Pagination";
import {moviesDBActions} from "../../redux";



const Movies = () => {

    const {page, loading, searchFilm,movies} = useSelector(state => state.moviesDBReducer);
    const {genre} = useSelector(state => state.genresReducer);

    const [searchParams, setSearchParams] = useSearchParams();
    const queryPage = searchParams.get("page");
    const dispatch = useDispatch();

    useEffect(() => {
        moviesDBActions.setPage(queryPage)
        dispatch(moviesDBActions.getMovies({page: queryPage}))

        if(searchFilm){
            dispatch(moviesDBActions.getSearchWithFilms({page: queryPage, searchParam: searchFilm}))
        }
        if (searchFilm === '') {
            dispatch(moviesDBActions.getMovies({page: queryPage}))
        }
        if (!!genre) {
            dispatch(moviesDBActions.getWithGenres({page: queryPage, genre: genre.id}))
        }

    }, [dispatch, page, queryPage,searchFilm,genre ])


    return (
        <>
            {loading && <h1>Loading......</h1>}
            <div className={'movies'}>
                {movies.map(movie => (<Movie
                    key={movie.id} movie={movie}/>))}
            </div>
            {searchFilm !== '' &&
                <div className={'wrap_button'}>
                    <button className={'movies_button'}
                        onClick={() => dispatch(moviesDBActions.filterMovies(''))}>
                        Movies
                    </button>
                </div>
            }
            <Pagination queryPage={queryPage}/>
        </>
    );
};

export  {Movies};
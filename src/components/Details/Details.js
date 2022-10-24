import React from 'react';
import{useLocation,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Rating} from "react-simple-star-rating";


import {useEffect} from "react";
import {genresAction} from "../../redux/slice";
import "./Details.css";

const Details = () => {
    const {state}=useLocation();
    const dispatch=useDispatch();
    const {genres} = useSelector(state => state.genresReducer);

    useEffect(() => {

        dispatch(genresAction.getGenres())

    }, [dispatch])

    const movieGenres = genres?.filter(genre => state.genre_ids.includes(genre.id));
    const navigate = useNavigate();


    return (

        <div className={'details'}>
            <div className="details_container_left">
                <img src={`https://image.tmdb.org/t/p/original/${state.poster_path}`} alt={state.title} className={'details_poster'}/>
                <div className="wrap-info">
                    <p>Saw: {state.popularity}</p>
                    <p>Vote Average: {state.vote_average}</p>
                    <Rating
                        readonly={true}
                        initialValue={Math.round(state.vote_average)}
                        iconsCount={10}
                        size={20}
                    />
                </div>
            </div>
            <div className="details_container_right">
                <button
                    className={'return'}
                    onClick={() => navigate(`/movies/?page=${state.page}`)}>
                    Back
                </button>
                <h1 className="main-title">{state.title}</h1>
                <h3 className="original_title">Original: {state.original_title}</h3>
                <div className="details_genres">
                    {movieGenres?.map(genre => (<p key={genre.id}>{genre.name}</p>))}
                </div>
                <p className="overview">{state.overview}</p>
            </div>
        </div>
    );
};

export  {Details};
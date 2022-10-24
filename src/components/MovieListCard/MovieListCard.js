import React, {useEffect} from 'react';
import {Rating} from 'react-simple-star-rating'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {genresAction} from "../../redux/slice";
import "./MovieListCard.css";


const Movie = ({movie}) => {

    const {genres}=useSelector(state => state.genresReducer);

    const dispatch = useDispatch();

    const badge = genres.filter(genre =>movie.genre_ids.includes(genre.id)).map(item => item.name);
    const navigate = useNavigate();
    badge.length = 2;

    useEffect(() => {
        dispatch(genresAction.getGenres())
    }, [dispatch]);


    return (

        <div className={'movie'} onClick={() => navigate('details', {state: movie})}>

            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className={'poster'}/>

            <div className="badge">
                {badge.map((item,index) =>
                    (<p key={index}>{item}</p>))}
            </div>

            <div className="info">
                <p className={'title'}>{movie.title}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                <Rating
                    className={'star'}
                    readonly={true}
                    initialValue={Math.round(movie.vote_average)}
                    iconsCount={10}
                    size={20}
                />
            </div>
        </div>
    );

};


export {Movie};
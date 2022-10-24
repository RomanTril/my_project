import React, {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";

import {genresAction} from "../../redux/slice";
import "./Genres.css";


const Genres = () => {

    const {genre,genres} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresAction.getGenres())
    }, [dispatch]);

    return (
        <div className={'genres'}>
            <div className="genres-title">
                <h2>Genres:</h2>
            </div>
                <div className="genres-wrap">
                {genres.map(genre => (
                    <button key={genre.id} className="genres-btn" onClick={() => {
                        dispatch(genresAction.getGenre(genre))}}>
                        {genre.name}
                    </button>
                ))}
                <div className="reset">
                    <button onClick={() => {dispatch(genresAction.getGenre(null))
                    }}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export {Genres}
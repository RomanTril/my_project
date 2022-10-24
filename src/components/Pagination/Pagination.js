import React from 'react';
import{useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesDBActions} from "../../redux";
import './Pagination.css';

const Pagination = ({queryPage}) => {

    const {page} = useSelector(state => state.moviesDBReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <div className={'pagination'}>
            <button className={'prev'} onClick={() => {
                dispatch(moviesDBActions.prev())
                navigate(`?page=${page - 1}`)
            }} disabled={queryPage <= 1}>Prev
            </button>
            <button className={'next'} onClick={() => {
                dispatch(moviesDBActions.next())
                navigate(`?page=${page + 1}`)}}>Next
            </button>
        </div>
    );
};

export {Pagination};
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {moviesDBActions} from "../../redux";
import {themeAction} from "../../redux/slice";
import './Header.css';


const Header = () => {

    const [theme, setTheme] = useState(null);

    const {register, handleSubmit, reset} = useForm({defaultValues: {search: ''}});

    const dispatch = useDispatch();


    const submit = async (data) => {
        await dispatch(moviesDBActions.filterMovies(data.search))
        reset()
    };

    return (
        <header className={'header'}>
            <div className="wrap_logo">
                <p className="logo">MovieGo</p>
            </div>
            <form className={'form'} onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'Enter films'}
                       className={'inputs'} {...register('search')}/>
                <button className={'form_button'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </form>
            {!theme ?
                (<FontAwesomeIcon
                    icon={faToggleOff}
                    className="toggle"
                    onClick={() => {setTheme(true)
                        dispatch(themeAction.light())}}/>)
                : (<FontAwesomeIcon
                    icon={faToggleOn} className="toggle"
                    onClick={() => {setTheme(false)
                        dispatch(themeAction.dark())}}/>)}


        </header>
    );
};

export {Header};
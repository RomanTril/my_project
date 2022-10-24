import React from 'react';

import {Movies,Genres} from "../../components";
import './pageMovie.css';

const PageMovie = () => {

    return (
        <div  className='pageMovie'>

             <Genres/>
            <div>
             <Movies/>
            </div>
        </div>
    );
};

export {PageMovie};
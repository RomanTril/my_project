import {axiosService} from "../axios.service/axios.service";

import {baseURL,urls} from "../../config";

const movieDBService ={
    choosePage:(page)=>axiosService(`${baseURL}/${urls.page}${page}`),
    getWithGenres: (page, genre) => axiosService(`${baseURL}/${urls.page}${page}&with_genres=${genre}`),
    getWithSearchFilms: (page, search) => axiosService(`${baseURL}${urls.search}/?page=${page}&query=${search}`),

};

export {movieDBService};
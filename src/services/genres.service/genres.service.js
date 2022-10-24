import {axiosService} from "../axios.service/axios.service";

import {urls} from "../../config";

const genreService = {
    getAllGenre: () => axiosService(urls.movie)
};

export {genreService};
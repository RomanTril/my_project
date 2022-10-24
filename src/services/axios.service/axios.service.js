import axios from "axios";

import {baseURL} from "../../config";


const axiosService=axios.create({baseURL});

const token ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGQ2NzUwMWFjNGZhZWI2NTBlZGM2MTUxZTg3ZGVmNCIsInN1YiI6IjYzNGQyZWRlZTI2M2JiMDA4NGYzNzIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g03TVqJsRR8GUvMy2fnitDJ9qHeP_GWwX19vY9tVlx0'

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization=token
    return config;
});

export {axiosService};
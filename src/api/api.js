import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"bf8b18deb6b315d8bec34dd394f5cf2c",
        language:"en-US"
    }
})

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upComing: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    search: (term) => api.get(`search/movie`,{
        params:{
            query:encodeURIComponent(term),
        }
    }), 
    movieDetail: (id) => api.get(`movie/${id}`,{
        params: {
            append_to_response: "videos"
        }
    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    search: (term) => api.get(`search/tv`,{
        params:{
            query:encodeURIComponent(term),
        }
    }),
    showDetail: (id) => api.get(`tv/${id}`)
};


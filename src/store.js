import {reactive} from "vue"
import axios from "axios";

export const store = reactive ({
    searchText:"",
    movies: [],
    series: []
})

export function fetchMovies (){
    const url = "https://api.themoviedb.org/3"
    axios.get (url + "/search/movie", {
        params: {
            api_key: "fcd0efb0330e31fac39428b19332a411",
            query: store.searchText,
            language: "it-IT"
        }
    })
    .then ((resp) => {
        console.log (resp.data.results);

        store.movies = resp.data.results
    })
}
import {reactive} from "vue"
import axios from "axios";

export const store = reactive ({
    clickSerchBtn: false,
    searchText:"",
    movies: [],
    series: [],
    popularMovies: []
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
        store.movies = resp.data.results;
    })
    .catch ((error) => {
        alert("A causa di un errore, l'operazione non é andata a buon fine");
    })
}

export function fetchSeries (){
    const url = "https://api.themoviedb.org/3"
    axios.get (url + "/search/tv", {
        params: {
            api_key: "fcd0efb0330e31fac39428b19332a411",
            query: store.searchText,
            language: "it-IT"
        }
    })
    .then ((resp) => {
        console.log (resp.data.results);

        store.series = resp.data.results;
    })
    .catch ((error) => {
        alert("A causa di un errore, l'operazione non é andata a buon fine")
    })
}

export function fetchPopularMovie () {
    const url = "https://api.themoviedb.org/3"
    axios.get (url + "/movie/popular", {
        params: {
            api_key: "fcd0efb0330e31fac39428b19332a411",
            language: "it-IT"
        }
    })
    .then ((resp) => {
        console.log (resp.data.results);
        store.popularMovies = resp.data.results;
    })
    .catch ((error) => {
        alert("A causa di un errore, l'operazione non é andata a buon fine");
    })
}
import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    searchFilms: '',
    moviesList: [],
    myApiKey: 'f9eba7e9175561429bac90d77bb25cab',

    getFilmsList(Films) {
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: Films,
                api_key: this.myApiKey,
            }
        })
            .then((response) => {
                this.moviesList = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },
});

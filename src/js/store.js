import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    searchred: '',
    moviesList: [],
    seriesList: [],
    myApiKey: 'f9eba7e9175561429bac90d77bb25cab',

    getFilmsList(films) {
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: films,
                api_key: this.myApiKey,
            }
        })
            .then((response) => {
                this.moviesList = response.data.results;
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },
    getSeriestvList(series) {
        axios.get('https://api.themoviedb.org/3/search/tv', {
            params: {
                query: series,
                api_key: this.myApiKey,
            }
        })
            .then((response) => {
                this.seriesList = response.data.results;
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },

});

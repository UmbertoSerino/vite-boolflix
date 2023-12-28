import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    searchred: '',
    moviesList: [],
    myApiKey: 'f9eba7e9175561429bac90d77bb25cab',
    urlImg: 'https://image.tmdb.org/t/p/w342',
    nextAverage: '',

    getMoviesList(query, typeMovie = 'movie') {
        const url = typeMovie === 'movie' ? 'https://api.themoviedb.org/3/search/movie' :
            'https://api.themoviedb.org/3/search/tv';

        axios.get(url, {
            params: {
                query,
                api_key: this.myApiKey,
            }
        })
            .then((response) => {
                this.moviesList = response.data.results;
                this.moviesList.forEach(movie => {
                    movie.nextAverage = Math.ceil(movie.vote_average / 2);
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },


});

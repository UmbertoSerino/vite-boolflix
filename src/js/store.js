import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    searchFilms: '',
    moviesList: [],
    myApiKey: 'f9eba7e9175561429bac90d77bb25cab',

    getFilmsList() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: this.searchFilms,
                api_key: this.myApiKey,
            }
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },
});

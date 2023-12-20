import { reactive } from 'vue'
import axios from 'vue'

const myApiKey = 'f9eba7e9175561429bac90d77bb25cab';
const query = '';

export const store = reactive({
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            include_adult: 'false',
            include_video: 'true',
            language: 'it-IT',
            page: '1',
            sort_by: 'popularity.desc'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWViYTdlOTE3NTU2MTQyOWJhYzkwZDc3YmIyNWNhYiIsInN1YiI6IjY1ODJjMmEwMTgwZGVhNTNmNDhiZGE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bKbM7TgVS5xU4BtJ7K8DWYNdyEyLQfgdPYucRFebrdI'
        }
    },

    axios
      .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        })

});
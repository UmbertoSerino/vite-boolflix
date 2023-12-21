<template>
    <div>
        <h2>Search for Films</h2>
        <p>result: {{ searchResult() }}</p>
        <input type="text" placeholder="Search films" v-model="searchFilms" @keyup.enter="store.getFilmsList(searchFilms)">
        <button @click="store.getFilmsList(searchFilms)">Search</button>
    </div>
</template>
<script>
import { store } from '../js/store';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            searchFilms: '',
        };
    },
    methods: {
        searchResult() {
            return this.store.moviesList.length;
        }
    },
};
</script>
  
<style lang="scss" scoped></style>
  
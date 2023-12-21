<template>
    <div>
        <h2>Search for Films</h2>
        <p>result: {{ searchResult() }}</p>
        <input type="text" placeholder="Searchred" v-model="searchred" @keyup.enter="store.getMoviesList(searchred)">
        <button @click="store.getmoviesList(searchred)">Search</button>
    </div>
</template>
<script>
import { store } from '../js/store';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            searchred: '',
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
  
<template>
    <div>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search for Films" v-model="searchred" @keyup.enter="store.getMoviesList(searchred)">
            <button class="btn btn-outline-success" type="submit" @click="store.getMoviesList(searchred)">Search</button>
            <p>result: {{ searchResult() }}</p>
        </form>
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
  
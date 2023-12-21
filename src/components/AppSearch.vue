<template>
    <div>
        <h1>Search for Films</h1>
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

    },
};
</script>
  
<style lang="scss" scoped></style>
  